<script setup></script>
<template>
  <div>
    <div class="container pb-[100px]">
      <div class="flex gap-3 font-normal text-base mb-4">
        <p class="text-grayn/30">Главная</p>
        <p class="text-grayn">> Каталог</p>
      </div>
      <p class="font-bold text-grayn text-[40px] leading-[54px] mb-[60px]">
        Каталог
      </p>
      <div class="grid grid-cols-3 justify-start">
        <HomeComponentCatalogCard />
      </div>
    </div>

    <HomeComponentBrend />
    <HomeComponentBlog />
  </div>
</template>

<style scoped></style>
