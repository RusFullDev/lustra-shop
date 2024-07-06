<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();

import ProductCard from "~/components/homeComponent/ProductCard.vue";

const products = computed(() => {
  return store.likedProducts;
});
</script>

<template>
  <div class="container my-[100px]">
    <h1 class="text-start font-bold text-5xl mb-8">Избранные товары</h1>
    <div class="grid grid-cols-4 gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped></style>
