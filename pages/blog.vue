
<script setup>
import BlogCard from '~/components/homeComponent/BlogCard.vue';


</script>
<template>
    <div class="container my-[60px]">
        <div class="flex gap-3 font-normal text-base mb-6">
        <p class="text-grayn/30">Главная</p>
        <p class="text-grayn">> Блог</p>
      </div>
      <p class="font-bold text-grayn text-[40px] leading-[54px] mb-[60px]">Блог</p>
      <div class="grid grid-cols-3">
        <BlogCard/>
          <BlogCard/>
      </div>
    </div>
</template>



<style scoped>

</style>