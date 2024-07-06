<script setup>
import axios from "axios";

definePageMeta({
  layout: "admin",
});
const router = useRouter();
const route =useRoute()
const product = reactive({
  title: "",
  newPrice: "",
  oldPrice: "",
  image: "",
});

const fechProduct = async () => {
  try {
    axios.get(
      `https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/${ route.params.id}`
    
    )
    .then(res=>{
        product.value =res.data
        product.title = product.value.title
        product.newPrice = product.value.newPrice
        product.oldPrice = product.value.oldPrice
        product.image =  product.value.image
    })

  } catch (err) {
  console.log(err);
  }
};
fechProduct()
const editProduct = async () => {
  try {
    axios.put(
      `https://66852ec1b3f57b06dd4bb4fb.mockapi.io/famous_product/${route.params.id}`,{
        title:product.title,
        newPrice:product.newPrice,
        oldPrice:product.oldPrice,
        image:product.image
      }
    
    )
    .then(res=>{
        product.value = res.data
    })
    router.push("/admin/edit-product");
  } catch (err) {
    ElNotification.error("error submit!");
    console.log("errors:", err);
    console.log("error submit!", fields);
  }
};
</script>

<template>
  <div>
    <h1 class="mb-5 text-2xl font-medium font-serif">Product create</h1>
    <p class="text-base font-normal">Title</p>
    <input
      v-model="product.title"
      type="text"
      class="mb-4 py-3 px-4 w-full rounded-md border border-grayn/30 outline-none"
    />
    <p class="text-base font-normal">Price</p>
    <input
      v-model="product.oldPrice"
      type="text"
      class="mb-4 py-3 px-4 w-full rounded-md border border-grayn/30 outline-none"
    />
    <p class="text-base font-normal">Sale</p>
    <input
      v-model="product.newPrice"
      type="text"
      class="mb-4 py-3 px-4 w-full rounded-md border border-grayn/30 outline-none"
    />
    <p class="text-base font-normal">Image-url</p>
    <input
      v-model="product.image"
      type="text"
      class="mb-4 py-3 px-4 w-full rounded-md border border-grayn/30 outline-none"
    />
    <p class="text-base font-normal">Category</p>
    <div
      class="flex justify-between mb-4 px-4 py-3 w-full rounded-md border border-grayn/30"
    >
      <label for="cars">Tanlang</label>
      <select name="cars" id="cars" class="otline-none">
        <option value="volvo"></option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <p class="text-base font-normal">Desc</p>
    <textarea
      type="text"
      name=""
      id=""
      class="mb-4 py-10 w-full rounded-md border px-4 border-grayn/30 outline-none resize-none"
    ></textarea>
    <button
      @click="editProduct"
      class="px-8 py-2 bg-grayn text-white rounded-md"
    >
      Save
    </button>
  </div>
</template>
