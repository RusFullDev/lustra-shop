<script setup>
const router = useRouter()
const select = [
    {
        image: '/selection/Frame.png',
        title: 'Только проверенные бренды',
        info: 'Бренды, проверенные временем и качеством'
    },
    {
        image: '/selection/Group.png',
        title: 'Самые низкие цены',
        info: 'Ниже не будет нигде'
    },
    {
        image: '/selection/Group (1).png',
        title: 'Быстрая доствка',
        info: 'Доставляем по всей РФ за 1-10 дней'
    },
    {
        image: '/selection/Frame (1).png',
        title: 'Большой ассортимент',
        info: 'Более 1000 товаров'
    }
];

</script>

<template>
    <div class="container mb-[83px]">
        <div class="flex justify-between mb-10">
            <p class="font-bold text-grayn text-[40px] leading-[54px]">Почему NORNLIGHT?</p>
            <button @click="router.push('/about')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center px-7 py-2 hidden md:block">О компании-></button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8 md:mb-0">
            <div v-for="(item, index) in select" :key="index" class="flex flex-col items-start p-10  bg-white rounded-lg shadow-md">
                <div class="bg-grayn rounded-md mb-20 w-20 h-20 flex items-center justify-center">
                    <img :src="item.image" :alt="item.title" class="w-[55%] " />
                </div>
                <h3 class="text-lg font-bold mb-5">{{ item.title }}</h3>
                <p class="text-[#D9D9D9] font-normal text-base">{{ item.info }}</p>
            </div>
        </div>
            <button @click="router.push('/about')" class="border border-grayn hover:bg-grayn hover:text-white text-grayn rounded-full font-medium text-base text-center w-full max-w-auto py-3 md:hidden">О компании-></button>

    </div>
</template>

<style scoped>
/* Здесь можно добавить стили, если необходимо */
</style>
