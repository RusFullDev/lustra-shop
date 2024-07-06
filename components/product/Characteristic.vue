<script setup>

const character = [
    {
        id:1,
        title:'Цвет',
        desc:'Жёлтый'
    },
     {
         id:2,
        title:'Год',
        desc:'2016'
    },
     {
         id:3,
        title:'Диаметр колеса',
        desc:'27.5'
    },
     {
         id:4,
        title:'Материал рамы',
        desc:'Карбон'
    },
     {
         id:5,
        title:'Размер',
        desc:'L'
    }, 
    { id:6,
        title:'Страна',
        desc:'Швейцария'
    }, 
    {
         id:7,
        title:'Производитель',
        desc:'Scott'
    }, 
    {
         id:8,
        title:'Покрышки',
        desc:'Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound'
    }, 
    {
         id:9,
        title:'Рама',
        desc:'Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL'
    }, 
    { id:10,
        title:'Подседельный Штырь',
        desc:'Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm'
    }, 
    {
         id:11,
        title:'Седло',
        desc:'Ritchey WCS Streem V3 Titanium rails'
    }, 
    {
         id:12,
        title:'Вилка',
        desc:'Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm'
    }, 
]
</script>

<template>
  <div class="container mb-[85px]">
    <h1 class="text-4xl text-grayn font-medium mb-6">Характеристика</h1>
    <div
      v-for="(item, index) in character"
      :key="item.id"
      :class="[index % 2 === 1 ? 'bg-[#F8F8F8]' : 'bg-[#FFFFFF]', 'flex', 'justify-between', 'p-6']"
    >
      <p class="text-base font-medium text-[#101010]">{{ item.title }}</p>
      <p class='w-[600px] text-end text-lg font-light text-[#4C4C4C]'>{{ item.desc }}</p>
    </div>
  </div>
</template>




<style  scoped>

</style>