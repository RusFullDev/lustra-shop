
<script setup>
import ProductCard from '~/components/homeComponent/ProductCard.vue';
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
    <div class=" container mb-[500px]">
        <p class="font-normal text-grayn text-base text-start mb-[55px]">Главная  ></p>
        <p class="font-bold text-grayn text-[40px] leading-[54px] mb-[89px]">Популярные товары</p>
        <div class=" grid grid-cols-4" >
    <ProductCard  class="p-4" v-for="product in products" :key="product.id"  :product="product"/>
      </div>
    </div>
</template>



<style scoped>

</style>