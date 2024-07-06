<script setup>
const shipping = [
    {
        title:"Доставка",
        info:"Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель"
    },
    {
        title:"Курьерская доставка",
        info:"БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД"
    },
    {
        title:"Самовывоз",
        info:"Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2"
    },
]
</script>

<template>
    <div class="container">
        <div class="flex gap-3 font-normal text-base mb-4 ">
           <p class="text-grayn/30">Главная </p>
           <p class="text-grayn">> Доставка и оплата</p>  
    </div> 
    <div class="flex justify-between">
        <p class="font-bold text-6xl text-grayn mb-9 max-w-[319px]">Доставка и оплата</p>
        <div class="flex flex-col max-w-[640px]">
            <div v-for="(item, index) in shipping" :key="index" class="mb-[60px]">
                <p class="mb-7 font-semibold text-2xl">{{ item.title }}</p>
                <p class=" font-normal text-xl">{{ item.info }}</p>
    
            </div>
        </div>

    </div>
       </div>
       <div class="w-full max-w-[1800px] my-[115px] mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687986.3252122466!2d37.165896362542135!3d55.78271244211441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1720065395937!5m2!1sru!2s" height="672" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
    </div>
</template>



<style  scoped>

</style>