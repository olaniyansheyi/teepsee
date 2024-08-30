<script setup>
import { useProductsStore } from "~/stores/product";

const productStore = useProductsStore();

definePageMeta({
  layout: "custom",
});

const searchedProducts = ref(null);

const error = ref(null);

onMounted(async () => {
  try {
    const data = await productStore.searchProducts(productStore.searchQuery);
    if (data) {
      searchedProducts.value = data;
    } else {
      throw new Error("No product was found");
    }
  } catch (err) {
    error.value = "Failed to load products";
  }
});
</script>

<template>
  <div
    v-if="searchedProducts"
    class="flex justify-center lg:items-start items-center gap-5 flex-wrap md:justify-start my-3 w-full"
  >
    <div
      v-for="product in searchedProducts"
      :key="product.id"
      @click="
        () => {
          navigateTo(`/products/${product.id}`);
        }
      "
      class="text-secondary w-[45%] md:w-[40%] lg:w-[21%] h-[260px] bg-white rounded-lg py-5 sm:px-8 px-2 relative cursor-pointer"
    >
      <div
        class="h-[50%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
      >
        <img class="h-[5rem]" :src="product.image" alt="" />
      </div>
      <div
        class="flex justify-between items-start w-full my-3 flex-col gap-y-1"
      >
        <span class="flex justify-start items-start flex-col">
          <h1 class="text-md font-semibold">{{ product.name }}</h1>
          <p class="text-[#666666]">{{ product.category }}</p>
        </span>
        <h2 class="font-semibold text-md">#{{ product.price }}</h2>
      </div>
      <div class="w-[25px] absolute top-3 right-4">
        <img :src="Heart" alt="" />
      </div>
    </div>
  </div>
</template>
