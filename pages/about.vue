
<script setup>
const router = useRouter()
</script>
<template>
    <div>
<AboutCompany/>
<HomeComponentBrend/>
    <div class="flex justify-between mb-10 container">
                <p class="font-bold text-grayn text-[40px] leading-[54px]">Блог</p>
                <button @click="router.push('/blog')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center px-7 py-2">Перейти в блог-></button>
            </div>
<div class=" grid grid-cols-3 mb-[127px]">
<HomeComponentBlogCard/>
</div>
    </div>
</template>



<style scoped>

</style>