<script setup>
import { useProductsStore } from "~/stores/product";
import Heart from "~/assets/icons/Heart.svg";

const productStore = useProductsStore();

definePageMeta({
  layout: "custom",
});

const route = useRoute();

const searchedProducts = ref(null);

const error = ref(null);

watch(
  () => route.params.query,
  async (newQuery) => {
    if (newQuery) {
      try {
        const data = await productStore.searchProducts(newQuery);
        searchedProducts.value = data || [];
      } catch (err) {
        error.value = "No product found for your query";
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    v-if="productStore.searchedProducts.length === 0"
    class="px-6 h-[70vh] flex justify-center items-center tracking-wider"
  >
    <h1 class="mx-auto text-center text-xl">
      No product found for your search
    </h1>
  </div>
  <div
    v-if="productStore.searchedProducts"
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
