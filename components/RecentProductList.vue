<script setup>
import { useProductsStore } from "~/stores/product";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.getProducts();
  productsStore.fetchRecentlyViewedProducts();

  if (authStore.user === null) await authStore.getCurrentUser();
});
</script>

<template>
  <div class="text-secondary tracking-wider my-8">
    <h1 class="font-semibold text-xl mb-10">Recently Viewed Items</h1>

    <div
      v-if="productsStore.recentlyViewedProducts.length !== 0"
      class="flex justify-center lg:items-start items-start gap-5 flex-wrap md:justify-start my-3"
    >
      <ProductContainer :productInfo="productsStore.recentlyViewedProducts" />
    </div>

    <div v-else class="my-10">
      <h2 class="pb-10 text-lg font-semibold tracking-wider text-center">
        You have not viewed any product Yet.
      </h2>
    </div>
  </div>
</template>
