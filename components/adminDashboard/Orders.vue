<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();
// console.log(".store", store.order);
const handlerToAccept = () => {
  //   store.order = [];
};
</script>

<template>
  <div class="container">
    <!-- <pre>{{ store.order }}</pre> -->
    

    <div v-for="(item, index) in store.order" :key="index">
      <div
        class="flex items-center justify-evenly gap-10 py-5 text-lg font-medium"
      >
        <p>User name:{{ item.user.fullName }}</p>
        <p>Phone number:{{ item.user.phoneNumber }}</p>
        <p>Email:{{ item.user.email }}</p>
        <p>Address:{{ item.user.address }}</p>
      </div>

      <table
        class="w-full table-auto border-collapse bg-gray-200 rounded-xl mb-5"
      >
        <thead>
          <tr class="text-left font-medium text-base text-grayn/50">
            <th class="p-4">Фото</th>
            <th class="p-4">Товары</th>
            <th class="p-4">Описание</th>
            <th class="p-4">Артикул</th>
            <th class="p-4">Количество</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in item.products"
            :key="product.id"
            class="border-y border-grayn/50"
          >
            <td class="p-4">
              <img
                :src="product.image"
                alt="Product Image"
                class="w-full max-w-auto object-cover"
              />
            </td>
            <td class="p-4">
              <p class="font-semibold p-4 text-base">{{ product.title }}</p>
              <p class="text-grayn font-bold text-xl">
                {{ product.newPrice }}₽
              </p>
            </td>
            <td class="p-4 font-normal text-base">
              Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4;
              XS;
            </td>
            <td class="p-4 font-normal text-base">
              RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
            </td>
            <td class="p-4">
              <div class="flex items-center">
                {{ product.quantity }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between items-center">
        <p class="text-lg font-semibold">
          Total price: {{  }} ₽
        </p>
        <button
          @click="handlerToAccept"
          class="px-7 py-3 bg-grayn text-white rounded-md text-lg"
        >
          Qabul qilish
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
