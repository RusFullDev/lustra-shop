
<script setup>
import BlogCard from './BlogCard.vue';
import BlogDescription from './BlogDescription.vue';
const router = useRouter()



</script>
<template>
    <div class="container mb-12">
        <div class="flex justify-between mb-10">
            <p class="font-bold text-grayn text-[40px] leading-[54px]">Блог</p>
            <button @click="router.push('/blog')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center px-7 py-2">Перейти в блог-></button>
        </div>

      <div class=" md:grid md:grid-cols-3 flex flex-wrap sm:grid grid-cols-2">
  <BlogCard />
      </div>
      <BlogDescription/>
    </div>
</template>



<style scoped>

</style>