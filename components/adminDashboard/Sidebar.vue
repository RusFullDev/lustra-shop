<script setup></script>

<template>
  <div class="bg-grayn h-screen fixed left-0 py-6 px-12">
    <div class="flex items-center  gap-2 mb-10 text-2xl">
      <Icon
        name="mingcute:arow-to-left-fill"
        width="1.2rem"
        height="1.2rem"
        style="color: white;"
      />
      <p class=" text-white font-medium text-2xl">Admin Dashboard</p>
    </div>

    <nuxt-link to="/admin">
        <div class="flex items-center  text-xl mb-3 gap-2">
      <Icon
        name="dashicons:admin-generic"
        width="1.2rem"
        height="1.2rem"
        style="color: white;" class=""
      />
      <p class="text-white text-lg">Dashboard</p>
    </div>
    </nuxt-link> 

    <nuxt-link to="/admin/create-product">
        <div class="flex items-center text-xl mb-3 gap-2">
      <Icon
        name="ep:menu"
        width="1.2rem"
        height="1.2rem"
        style="color: white;"
      />
      <p class="text-white text-lg">Create product</p>
    </div>
    </nuxt-link>
    

    <nuxt-link to="/admin/edit-product">
        <div class="flex items-center text-xl mb-3 gap-2">
      <Icon
        name="line-md:edit-twotone-full"
        width="1.2rem"
        height="1.2rem"
        style="color: white;"
      />
      <p class="mb-2 text-white text-lg">Manage product</p>
     </div>
    </nuxt-link>
    
      
     <nuxt-link to="/admin/orders">
        <div class="flex items-center mb-3 text-xl gap-2">
        <Icon name="solar:reorder-linear" width="1.2rem" height="1.2rem"  style="color: white" />
      <p class="text-white text-lg">Orders</p>
    </div>
     </nuxt-link>
     <nuxt-link to="/">
     <div class="flex items-center mb-3 text-xl gap-2">
      <Icon name="ri:logout-box-r-line" width="1.2rem" height="1.2rem"  style="color: white" />
      <p class="text-white text-lg">Logout</p>
    </div>
  </nuxt-link>
  </div>

</template>

<style scoped></style>
