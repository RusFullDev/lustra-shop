<script setup>
import axios from "axios"
import {ref} from "vue"

const blogs = ref([])

const fechProduct = ()=>{
    axios.get("https://66852ec1b3f57b06dd4bb4fb.mockapi.io/blog/")
.then((result) => {
    blogs.value = result.data
}).catch((err) => {
    console.log("error",err);
})
}

fechProduct()
</script>

<template>
    <div class="p-4" v-for="item,index in blogs" :key="index">
        <div class="shadow-2xl bg-white p-4 rounded-md" >
            <div class="">
                    <img :src="item.image" class="w-full mb-8" />
                <div class="flex justify-between items-center mb-6">
                    <p class="text-grayn  font-bold text-xl h-10">{{item.title}}</p>
<img src="/Vector 4.png" alt="" class="">
                </div>
                <p class=" text-grayn  text-sm font-medium mb-8">{{item.date}}</p>
            </div>
        </div>

    </div>
</template>



<style scoped>

</style>