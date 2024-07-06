<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();

import ProductCard from "~/components/homeComponent/ProductCard.vue";

const products = computed(() => {
  return store.basket;
});
</script>

<template>
    <div class="container">
<table class="w-full table-auto border-collapse bg-gray-200 rounded-xl mb-5">
  <div class="p-10">
      <thead>
        <tr class=" text-left font-medium text-base text-grayn/50">
          <th class="p-4">Фото</th>
          <th class="p-4">Товары</th>
          <th class="p-4">Описание</th>
          <th class="p-4">Артикул</th>
          <th class="p-4">Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index" class="border-y border-grayn/50">
          <td class="p-4">
            <img :src="product.image" alt="Product Image" class="w-full max-w-auto object-cover" />
          </td>
          <td class="p-4 ">
            <p class="font-semibold p-4 text-base">{{ product.title }}</p>
            <p class="text-grayn font-bold text-xl">{{ product.newPrice}}₽</p>
          </td>
          <td class="p-4 font-normal text-base ">Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</td>
          <td class="p-4  font-normal text-base ">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</td>
          <td class="p-4">
            <div class="flex items-center">
              <button @click="decreaseQuantity(product)" class="px-2 text-2xl">-</button>
              <input type="text" v-model.number="product.quantity" class="w-10 h-10 rounded-md text-xl text-center border outline-none" />
              <button @click="increaseQuantity(product)" class="px-2 text-2xl">+</button>
              <button @click="removeProduct(index)" class="ml-4 text-red-500">🗑️</button>
            </div>
          </td>
        </tr>
      </tbody>
      </div>
    </table>

    </div>
</template>



<style  scoped>

</style>