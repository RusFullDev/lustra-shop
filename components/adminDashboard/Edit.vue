<script setup>
import axios from "axios";
const router = useRouter()

const products = ref([]);

const fetchProducts = () => {
  axios
    .get("https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/")
    .then((res) => {
      products.value = res.data;
    });
};
fetchProducts();
const deleteHandler = async (id) => {
  try {
    // loading.value = true;
    const res = await axios.delete(
      `https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/${id}`
    );
    if (res.status == 200) {
      ElNotification.success("Data o'chirildi");
      fetchProducts();
    } else {
      ElNotification.error("Data o'chirilishida xatolik");
      fetchProducts();
    }
  } catch (error) {
    console.log("error", error);
  }
};
const editHandler =(id)=>{
router.push(`/admin/${id}`)
}
fetchProducts()
</script>

<template>
  <div>
    <p class="font-medium text-3xl mb-2">Manage product</p>
    <div class="grid grid-cols-3">
      <div class="p-4" v-for="(item, index) in products" :key="index">
        <div class="shadow-md rounded-md bg-white p-4">
          <div class="flex justify-center mb-2Ё">
            <img :src="item.image" class="w-[175px] h-[215px]" />
          </div>
          <p
            class="text-grayn font-medium text-base leading-[22px] h-12 line-clamp-2"
          >
            {{ item.title }}
          </p>
          <p class="line-through text-[#9F9F9F] text-sm font-medium">
            {{ item.oldPrice }}
          </p>
          <div class="flex justify-between">
            <p class="text-grayn font-bold text-base leading-[22px]">
              {{ item.newPrice }}
            </p>
            <div class="flex gap-2">
              <button @click="editHandler(item.id)">📝</button>
              <button @click="deleteHandler(item.id)">🗑</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
