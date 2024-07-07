<script setup>
const katalog = [

{
        name:'Люстры',
        price:'От 540₽',
        img:'/katalog/250970 1.png'
},
{
        name:'Светильники',
        price:'От 540₽',
        img:'/katalog/000000392_granda_led_ral9006_ceiling_0-45-125 1.png'
},
{
        name:'Бра',
        price:'От 540₽',
        img:'/katalog/15825 1.png'
},
{
        name:'Торшеры',
        price:'От 540₽',
        img:'/katalog/2_k97l-dp 1.png'
},
{
        name:'Настольные лампы',
        price:'От 540₽',
        img:'/katalog/649de3926f2a436cd230e74fb12d525c 1.png'
},    
{
        name:'Споты',
        price:'От 540₽',
        img:'/katalog/0T-000095810020719040101 1.png'
},
]
</script>

<template>
    <div v-for="(item,index) in katalog" :key="index" class="p-5 font-medium text-grayn text-lg leading-[22px]">
        <div class="bg-foot p-8 flex gap-8 h-[250px] rounded-xl">
                <div class="flex flex-col justify-between">
                    <p>{{item.name}}</p>
                    <p>{{item.price}}</p> 
                </div>
                <img :src="item.img" alt="Katalog" class="w-full">
            </div>
    </div>
</template>



<style  scoped>

</style>