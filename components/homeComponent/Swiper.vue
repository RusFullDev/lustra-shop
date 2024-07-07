<template>
  <div class="mb-16 md:mb-[102px]">
    <swiper :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
      <swiper-slide><SwiperCard /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SwiperCard from './SwiperCard.vue';

const modules = [Pagination];
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
