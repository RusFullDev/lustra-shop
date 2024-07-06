
<script setup>
import Sidebar from '~/components/adminDashboard/Sidebar.vue';

</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="400px" color='grayn'><Sidebar/></el-aside>
      <el-main class="mt-5">   
          <slot/>
      </el-main>
    </el-container>
  </div>
</template>




<style  scoped>

</style>
