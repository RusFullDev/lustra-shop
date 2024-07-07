<script setup>
import { usePiniaStore } from "../store";
import { computed } from "vue";


const router = useRouter();
const store = usePiniaStore();

const totalPrice = computed(() => store.totalPrice);
</script>


<template>
    <div class="container">

  
 <div class="h-[361px] bg-foot mb-[58px] rounded-2xl">
        <div class="text-grayn p-12">
            <p class="text-3xl font-bold mb-8 ">Оплата</p>
            <div class="flex gap-10 font-semibold font-grayn text-base mb-[69px]">
                <p>Товары............................................. {{totalPrice}} ₽</p> 
                <p>Доставка.............................................. {{(totalPrice * 12)/100}} ₽</p>
            </div>
            <p class="text-2xl font-bold text-grayn mb-7">{{totalPrice}}₽</p>
            <div class="flex gap-6">
                <button class="text-white bg-grayn rounded-full w-[324px] h-[50px]">Купить</button>
                <div class="flex gap-2 items-center">
                    <input type="checkbox" class="rounded-full">
                    <p class="text-xl font-semibold"> согласен наобработку моих персональных данных</p>
                </div>
            </div>
        </div>
    </div>
      </div>
   
</template>



<style  scoped>

</style>