
<script setup>
import ProductCard from '~/components/homeComponent/ProductCard.vue';
const router = useRouter();

</script>
<template>
    <div class=" container mb-[500px]">
       <nuxt-link to="/"> <p class="font-normal text-grayn text-base text-start mb-[55px]">Главная  ></p></nuxt-link>
        <p class="font-bold text-grayn text-[40px] leading-[54px] mb-[89px]">Популярные товары</p>
        <div class=" grid grid-cols-4">
  <ProductCard />
      </div>
    </div>
</template>



<style scoped>

</style>