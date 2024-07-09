<script setup>
import { usePiniaStore } from "../store";
import { computed } from "vue";

const router = useRouter();
const store = usePiniaStore();
const orders = reactive({
  fullName: "",
  phoneNumber: "",
  email: "",
  address: "",
  // totalPrice:""
});

const check = ref(false);
const totalPrice = computed(() => store.totalPrice);
const handlerBuy = () => {
  if (check) {
        // orders.totalPrice = store.totalPrice,
    store.order?.push({
      products: store.basket,
       user: orders,
    });
    store.basket = [];

  }
};
</script>

<template>
  <div class="container">
    <div class="h-[628px] bg-foot mb-[58px] rounded-2xl">
      <div class="p-12 text-grayn">
        <h1 class="text-3xl font-bold mb-8">Оформление</h1>
        <div class="flex gap-5 mb-[75px]">
          <input
            type="text"
            v-model="orders.fullName"
            placeholder="ФИО"
            class="border border-grayn bg-foot rounded-full w-full px-5 py-3 outline-none"
          />
          <input
            type="text"
            v-model="orders.phoneNumber"
            placeholder="телефон"
            class="border border-grayn bg-foot rounded-full w-full py-3 px-5 outline-none"
          />
          <input
            type="text"
            v-model="orders.email"
            placeholder="Электронная почта"
            class="border border-grayn bg-foot rounded-full w-full py-3 px-5 outline-none"
          />
        </div>
        <p class="text-3xl font-bold mb-8">Доставка</p>
        <input
          type="text"
          v-model="orders.address"
          placeholder="Адрес доставки"
          class="border border-grayn bg-foot rounded-full w-[770px] px-5 py-3 outline-none mb-8"
        />
        <textarea
          v-model="comment"
          name=""
          id=""
          placeholder="Комментарий"
          class="border border-grayn bg-foot h-[150px] w-[770px] resize-none px-5 py-5 outline-none rounded-2xl"
        ></textarea>
      </div>
    </div>

    <div class="h-[361px] bg-foot mb-[58px] rounded-2xl">
      <div class="text-grayn p-12">
        <p class="text-3xl font-bold mb-8">Оплата</p>
        <div class="flex gap-10 font-semibold font-grayn text-base mb-[69px]">
          <p>
            Товары.............................................
            {{ totalPrice }} ₽
          </p>
          <p>
            Доставка..............................................
            {{ (totalPrice * 12) / 100 }} ₽
          </p>
        </div>
        <p class="text-2xl font-bold text-grayn mb-7">{{ totalPrice + (totalPrice * 12) / 100 }}₽</p>
        <div class="flex gap-6">
          <button
            @click="handlerBuy"
            class="text-white bg-grayn rounded-full w-[324px] h-[50px]"
          >
            Купить
          </button>
          <div class="flex gap-2 items-center">
            <input v-model="check" type="checkbox" class="" />
            <p class="text-xl font-semibold">
              согласен наобработку моих персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
