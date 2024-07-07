<script setup>
const buy = reactive([
])

</script>


<template>
    <div class="container">

   
    <div class="h-[628px] bg-foot mb-[58px] rounded-2xl">
        <div class="p-12 text-grayn"> 
<h1 class="text-3xl font-bold mb-8 ">Оформление</h1>
<div class="flex gap-5 mb-[75px]">  
    <input type="text" v-model="fullName" placeholder="ФИО" class="border border-grayn bg-foot  rounded-full w-full px-5 py-3 outline-none">
    <input type="text" v-model="phoneNumber" placeholder="телефон" class="border border-grayn bg-foot rounded-full w-full py-3 px-5 outline-none">
    <input type="text" v-model="email" placeholder="Электронная почта" class="border border-grayn bg-foot rounded-full w-full py-3 px-5 outline-none">

</div>
<p class="text-3xl font-bold mb-8 ">Доставка</p>
  <input type="text" v-model="address" placeholder="Адрес доставки" class="border border-grayn bg-foot rounded-full w-[770px] px-5 py-3 outline-none mb-8">
  <textarea v-model="comment" name="" id="" placeholder="Комментарий" class="border border-grayn bg-foot h-[150px] w-[770px] resize-none px-5 py-5 outline-none rounded-2xl"></textarea>
        </div>
 </div>
    </div>

    
  
</template>



<style  scoped>

</style>