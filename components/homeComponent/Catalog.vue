
<script setup>
import CatalogCard from './CatalogCard.vue';


</script>

<template>
    <div class="container mb-12">
        <div class="flex justify-between">
            <p class="font-bold text-grayn text-[40px] leading-[54px]">Каталог</p>
            <button class="border border-grayn text-grayn rounded-full font-medium text-base text-center px-7 py-2">Весь каталог-></button>
        </div>

      <div class=" grid grid-cols-3">
  <CatalogCard />
      </div>
    </div>
</template>



<style  scoped>

</style>