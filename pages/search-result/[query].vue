<script setup>
import { useProductsStore } from "~/stores/product";

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
    class="flex justify-center lg:items-start items-center gap-5 flex-wrap md:justify-start my-3 w-full md:px-8 px-4"
  >
    <ProductContainer :productInfo="searchedProducts" />
  </div>
</template>
