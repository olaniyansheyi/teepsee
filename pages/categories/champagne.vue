<script setup>
import { useProductsStore } from "~/stores/product.js";
const productsStore = useProductsStore();

onMounted(() => {
  productsStore.filterByCategory("CHAMPAGNE");
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <ProductsCategoriesUi :currentCategory="productsStore.currentCategory" />
</template>
