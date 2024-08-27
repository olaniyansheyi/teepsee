<script setup>
import { useProductsStore } from "~/stores/product.js";
const productsStore = useProductsStore();

onMounted(() => {
  productsStore.filterByCategory("COGNAC");
  productsStore.toggleIsInProductPage();
});

onUnmounted(() => {
  productsStore.toggleIsInProductPage();
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <ProductsCategoriesUi :currentCategory="productsStore.currentCategory" />
</template>
