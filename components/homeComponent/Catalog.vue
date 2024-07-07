
<script setup>
import CatalogCard from './CatalogCard.vue';
const router = useRouter()

</script>

<template>
    <div class="container mb-12">
        <div class="flex justify-between mb-10">
            <p class="font-bold text-grayn text-[40px] leading-[54px]">Каталог</p>
            <button @click="router.push('/catalog')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center px-7 py-2 hidden md:block">Весь каталог-></button>
        </div>

      <div class=" sm:grid sm:grid-cols-2 md:grid-cols-3 justify-start">
  <CatalogCard />
      </div>
            <button @click="router.push('/catalog')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center w-full max-w-auto py-3 md:hidden">Весь каталог-></button>

    </div>
</template>



<style  scoped>

</style>