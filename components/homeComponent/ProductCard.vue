<script setup>
import axios from "axios"
import {ref} from "vue"

const product = ref([])

const fechProduct = ()=>{
    axios.get("https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/")
.then((result) => {
    product.value = result.data
}).catch((err) => {
    console.log("error",err);
})
}

fechProduct()
</script>

<template>
    <div class="p-4" v-for="item in product" :key="index">
        <div class="shadow-md rounded-md bg-white p-4" >
            <div class="">
                <div class="flex justify-center mb-8 relative"> 
                    <img :src="item.image" class="w-[175px] h-[215px]" />
                    <p class="top-0 right-0 absolute">🤍</p>
                </div>
                <p class="text-grayn  font-medium text-xl leading-[22px]">{{item.title}}</p>
                <p class="line-through text-[#9F9F9F]  text-sm font-medium">{{item.oldPrice}}</p>
                <div class="flex justify-between">
                    <p class="text-grayn font-bold text-xl leading-[22px]">{{item.newPrice}}</p>
                    <p>🛒</p>
                </div>
            </div>


        </div>

    </div>
</template>



<style scoped>

</style>