
<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';


</script>
<template>
    <div>
        <Navbar/>
<div class="container flex flex-col justify-center items-center">
    <img src="/404.png" alt="404" class=" max-w-auto mb-5 p-10">
<p class="font-semibold text-2xl text-grayn mb-16">Похоже, ничего не нашлось :(</p>
    <NuxtLink to="/" class="bg-grayn rounded-full text-white px-10 py-3 font-semibold text-base mb-[170px]">  На главную</NuxtLink>
</div>

<Footer/>
    </div>
</template>



<style scoped>

</style>