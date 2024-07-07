<script setup>
import { usePiniaStore } from "../../store";

const store = usePiniaStore();

const props = defineProps({
  product: Object,
});

const isLiked = computed(() => {
  const index = store.likedProducts.findIndex((p) => p.id == props.product.id);
  return index !== -1;
});
const toogleLike = () => {
  store.toogleLikeProduct(props.product);
};


const addBasket=()=>{
  store.toogleAddProduct(props.product);
}

const isAdded = computed(() => {
  const index = store.basket.findIndex((p) => p.id == props.product.id);
  return index !== -1;
});

const router = useRouter()

const handlerClick=(id)=>{
router.push(`/products/${id}`)

}
</script>

<template>
  <div>
    <div class="shadow-md rounded-md bg-white p-4">
      <div class="">
        <div class="flex justify-center mb-8 relative">
          <img :src="product.image" class="w-[175px] h-[215px]" @click="handlerClick(product.id)"/>
          <button @click="toogleLike" class="top-0 right-0 absolute">
            {{ isLiked ? "💘" : "🤍" }}
          </button>
        </div>
        <p class="text-grayn font-medium text-xl leading-[22px] h-20">
          {{ product.title }}
        </p>
        <p class="line-through text-[#9F9F9F] text-sm font-medium">
          {{ product.oldPrice }}
        </p>
        <div class="flex justify-between">
          <p class="text-grayn font-bold text-xl leading-[22px]">
            {{ product.newPrice }}
          </p>
          <button @click="addBasket">{{ isAdded ? "🗑" : "🛒" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
