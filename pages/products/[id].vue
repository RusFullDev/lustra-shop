<script setup>
import axios from 'axios';
import { usePiniaStore } from '../store';

const router = useRouter()
const route = useRoute();
const store = usePiniaStore();
const products = ref(null);



const fetchProduct = () => {
  axios
    .get(`https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/${route.params.id}`)
    .then(result => {
      products.value = { ...result.data, quantity: 1 };
    })
    .catch(err => {
      console.log('error', err);
    });
};
fetchProduct();



const addBasket = () => {
  store.toogleAddProduct(products.value);
  router.push('/basket')
};

const isLiked = computed(() => {
  const index = store.likedProducts.findIndex(p => p.id == products.value?.id);
  return index !== -1;
});

const toogleLike = () => {
  store.toogleLikeProduct(products.value);
};

const isAdded = computed(() => {
  const index = store.basket.findIndex(p => p.id == products.value?.id);
  return index !== -1;
});

const increaseQuantity = () => {
  products.value.quantity++;
  store.updateQuantity(products.value.id, products.value.quantity);
};

const decreaseQuantity = () => {
  if (products.value.quantity > 1) {
    products.value.quantity--;
    store.updateQuantity(products.value.id, products.value.quantity);
  }
};
</script>

<template>
  <div class="container mb-[150px]">
    <p class="font-normal text-grayn/30 text-base text-start mb-12">Главная ></p>
    <div v-if="products" class="flex flex-col md:flex-row gap-[56px]">
      <div class="shadow-md bg-[#DDDDDD] h-[400px] md:h-[600px] w-full md:w-[650px]">
        <img :src="products.image" alt="product" class="w-full h-full object-cover">
      </div>
      <div class="w-full md:w-[595px]">
        <p class="text-medium text-3xl md:text-5xl mb-10">{{ products.title }}</p>
        <p class="text-[#B3B3B3] font-normal text-sm mb-3">Scott</p>
        <p class="text-[#B3B3B3] font-normal text-sm mb-3">Артикул : 7655-188</p>
        <p class="text-[#4D932C] text-base font-normal">В наличии</p>
        <div class="flex gap-4 mb-10 items-center">
          <p class="text-[#101010] font-medium text-2xl md:text-[40px] leading-[64px]">{{ products.newPrice }} ₽</p>
          <p class="text-[#B3B3B3] line-through font-medium text-lg">{{ products.oldPrice }}</p>
        </div>
        <p class="text-base font-normal mb-12">Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</p>
        <div class="flex items-center justify-start gap-4">
          <div class="flex items-center gap-10 border-[#E5E5E5] text-2xl border rounded-md px-5 py-2">
            <button @click.stop="decreaseQuantity" class="px-2 text-2xl">-</button>
            <input type="text" v-model.number="products.quantity" class="w-10 h-10 rounded-md text-xl text-center border outline-none">
            <button @click.stop="increaseQuantity" class="px-2 text-2xl">+</button>
          </div>
          <button @click="addBasket" class="px-6 py-3 text-white bg-grayn rounded-md">В корзину</button>
          <button @click="toogleLike" class="bg-[#F8F8F8] rounded-md px-4 py-4">{{ isLiked ? "💘" : "🤍" }}</button>
        </div>
      </div>
    </div>
    <ProductCharacteristic />
  </div>
</template>

<style scoped>

</style>
