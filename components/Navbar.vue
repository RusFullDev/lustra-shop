
<script setup>
import { usePiniaStore } from "../store";
import { computed } from "vue";


const router = useRouter();
const store = usePiniaStore();

const totalQuantity = computed(() => store.totalQuantity);
</script>
<template>
    <div class="container font-sans my-10 md:my-0">
        <div class="hidden md:block">
            <div class="md:flex md:justify-between md:items-center text-grayn font-medium text-sm">
               <div class="flex gap-7 my-5">
                  <nuxt-link to="/about"><p>О компании</p></nuxt-link> 
                   <nuxt-link to="/shiping-payment"> <p>Доставка и оплата</p></nuxt-link>
                  <nuxt-link to="/return"><p>Возврат</p></nuxt-link>  
                  <nuxt-link to="/garant"> <p>Гарантии</p></nuxt-link> 
                  <nuxt-link to="/contacts"><p>Контакты</p></nuxt-link>  
                  <nuxt-link to="/blog"> <p>Блог</p></nuxt-link> 
               </div> 
               <div class="flex gap-6 items-center ">
                <p>8 (800) 890-46-56</p>
                <p>Заказать звонок</p>
               </div>
            </div>

      

        <div class="flex items-center gap-5 mb-[68px]">
             <nuxt-link to="/"> <img src="/Group 64.png" alt="LOGO" class=""></nuxt-link>  
             <!-- <nuxt-link to="/"> <img src="/navbar/Vector (1).png" alt="LOGO" class=""></nuxt-link>  
             <nuxt-link to="/"><img src="/navbar/NORNLIGHT.png" alt="LOGO" class=""></nuxt-link>   -->
                <button @click="router.push('/catalog')" class="flex items-center justify-center gap-2 text-white bg-grayn border-none rounded-full px-7 py-3 font-medium text-base">
                    <img src="/navbar/Vector.png" alt="" class="hidden md:block">Каталог</button>
                <div class="flex items-center w-2/3 relative">
                    <input type="text" placeholder="Поиск по товарам" class="px-5 outline-none rounded-full border border-grayn py-3 w-full pr-12">
    <img src="/navbar/Vector (6).png" alt="search" class="absolute top-1/2 right-5 -translate-y-1/2">
              
            </div>
           
            <nuxt-link to="/favorites"> 
                <div class="flex flex-col items-center gap-2 font-medium text-xs ">
                    <img src="/navbar/Vector (5).png" alt="favorite">
                    <p>Избранное</p> 
                </div>
            </nuxt-link>
            <div  class="flex flex-col items-center gap-2 font-medium text-xs">
                <img src="/navbar/Vector (3).png" alt=" sravneniya">
                <p>Сравнение</p>
                 <div class="border bg-red-500 text-white rounded-full px-1 text-xs top-12 right-[185px] absolute">
                       {{ store.likedProducts.length}}
                   </div>
                    <div class="border bg-red-500 text-white rounded-full px-1  text-xs top-12 right-7 absolute">
                                    {{ totalQuantity }}
                                              
                   </div>
                    
            </div>
            <nuxt-link to="/basket">
            <div class="flex flex-col items-center gap-2 font-medium text-xs">
                <img src="/navbar/Vector (4).png" alt="shopping kard">
                <p>Корзина</p>
            </div>
           
        </nuxt-link>

        </div>
                </div>

<!-- Mobile -->
<div class="md:hidden">
        <div class="flex items-center justify-evenly gap-10 mb-5">
            <button class="text-4xl"><Icon name="material-symbols:menu" width="1.2rem" height="1.2rem"  style="color: black" /></button>
           <nuxt-link to="/"> 
            <img src="/Group 64.png" alt="LOGO" class="w-full max-w-auto"></nuxt-link>              
             <nuxt-link to="/favorites"> 
                <div class="flex flex-col items-center gap-2 font-medium text-xs ">
                    <img src="/navbar/Vector (5).png" alt="favorite">
                    <p>Избранное</p> 
                </div>
            </nuxt-link>
              <nuxt-link to="/basket">
            <div class="flex flex-col items-center gap-2 font-medium text-xs">
                <img src="/navbar/Vector (4).png" alt="shopping kard">
                <p>Корзина</p>
            </div>
           
        </nuxt-link>    
</div>
<div class="flex  items-center  relative">
<input type="text" placeholder="Поиск по товарам" class="px-5 outline-none rounded-full border border-grayn py-3 w-full max-w-auto pr-12">
    <img src="/navbar/Vector (6).png" alt="search" class="absolute top-1/2 right-5 -translate-y-1/2">
              
            </div>
        </div>

    </div>
</template>



<style scoped>

</style>