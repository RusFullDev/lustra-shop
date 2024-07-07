
<script setup>
definePageMeta({
    layout:'admin',
    middleware:['auth']
})

const router = useRouter()


</script>

<template>
    <div class="container">
        <div class="flex justify-between mb-5 ">
            <h1 class="text-center text-2xl font-semibold font-serif">Dashboard list</h1>
            <el-button type="primary" plain @click="router.push('/admin/create-product')">Create product</el-button>
        </div>
<AdminDashboardEtableProduct />
    </div>
</template>




<style  scoped>

</style>