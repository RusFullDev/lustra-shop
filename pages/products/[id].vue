
<script setup>
import axios from "axios"
const route = useRoute()
const router = useRouter()

const products = ref([])

const fechProduct = ()=>{
    axios.get(`https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/${route.params.id}`)
.then((result) => {
    products.value = result.data
}).catch((err) => {
    console.log("error",err);
})
}
fechProduct()
</script>
<template>
    <div class="container mb-[150px]">
        <p class="font-normal text-grayn/30 text-base text-start mb-12">Главная  ></p>
        <div class="flex gap-[56px] ">
            <div class="shadow-md bg-[#DDDDDD] h-[600px] w-[650px] max-w-auto max-h-auto">
                <img :src="products.image" alt="product" class="w-full h-full max-w-auto max-h-auto">
            </div>
    <div class="w-[595px] h-[544px]">
        <p class="text-medium text-5xl mb-10">{{products.title}}</p>
        <p class="text-[#B3B3B3] font-normal text-sm mb-3">Scott</p>
        <p class="text-[#B3B3B3] font-normal text-sm mb-3">Артикул : 7655-188</p>
        <p class="text-[#4D932C] text-base font-normal">В наличии</p>
        <div class="flex gap-4 mb-10 items-center">
            <p class="text-[#101010] font-medium text-[40px] leading-[64px]">{{ products.newPrice}} ₽</p>
            <p class="text-[#B3B3B3] line-through font-medium text-lg">{{ products.oldPrice }}</p>
        </div>
        <p class="text-base font-normal mb-12">Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</p>
        <div class="flex items-center justify-start gap-4">
    <div class="flex items-center gap-10 border-[#E5E5E5] text-2xl border rounded-md px-5 py-2">
        <button>-</button>
        {{  }}
       <button>+</button>
    </div>
    <button @click=""  class="px-6 py-3 text-white bg-grayn rounded-md">В корзину</button>
    <button class="bg-[#F8F8F8] rounded-md px-4 py-4">🤍</button>
</div>
    </div>

        </div>
    </div>
    <ProductCharacteristic/>
</template>



<style scoped>

</style>