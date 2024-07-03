
<script setup>
import ProductCard from './ProductCard.vue'
const router = useRouter()

</script>
<template>
    <div class="container mb-12">
        <div class="flex justify-between mb-10">
            <p class="font-bold text-grayn text-[40px] leading-[54px]">Популярные товары</p>
            <button @click="router.push('/products')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center px-7 py-2">Все товары-></button>
        </div>

      <div class=" grid grid-cols-4">
  <ProductCard />
      </div>
    </div>
</template>



<style scoped>

</style>