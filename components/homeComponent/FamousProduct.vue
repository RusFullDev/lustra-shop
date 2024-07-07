
<script setup>

import ProductCard from './ProductCard.vue'
const router = useRouter()
import axios from "axios"

const products = ref([])

const fechProduct = ()=>{
    axios.get("https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/")
.then((result) => {
    products.value = result.data
}).catch((err) => {
    console.log("error",err);
})
}
fechProduct()

</script>
<template>
    <div class="container mb-12">
        <div class="flex justify-between mb-10">
            <p class="font-bold text-grayn text-[40px] leading-[54px]">Популярные товары</p>
            <button @click="router.push('/products')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center px-7 py-2 hidden md:block">Все товары-></button>
        </div>

      <div class=" grid grid-flow-row-dense md:grid-cols-4 sm:grid-cols-2 " >
  <ProductCard  class="p-4" v-for="product in products" :key="product.id"  :product="product"/>
 
    
      </div>
      <button @click="router.push('/products')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center w-full max-w-auto  py-3 md:hidden">Все товары-></button>
    </div>
</template>



<style scoped>

</style>