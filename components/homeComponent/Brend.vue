<script setup>
const imgArray = [
    '/brend/Group 66.png',
    '/brend/Group 183.png',
    '/brend/odeon_light 1.png',
    '/brend/Group 66.png',
    '/brend/Group 183.png',
    '/brend/odeon_light 1.png',
 
 
]
</script>


<template>
    <div class="mb-[72px] container flex justify-between items-center">
        <p class="font-bold text-grayn text-[40px] leading-[54px]">Только проверенные бренды</p>
        <div class="flex gap-1">
 <img src="/brend/Vector 3 (1).png" alt="" class="border border-grayn px-6 py-3 rounded-full hover:border-gray-400">
       <img src="/brend/Vector 3.png" alt="" class="border border-grayn px-6 py-3 rounded-full hover:border-gray-400">
        </div>
      

    </div>
   
    <div  class="mb-[100px]">
        <Vue3Marquee :pause-on-click="true">
        <img
            v-for="img in imgArray"
            :key="img"
            :src="img"
        />
    </Vue3Marquee>

    </div>
</template>



<style  scoped>

</style>