<script setup>
import { useAuthStore } from "~/stores/auth";

import { useProductsStore } from "~/stores/product.js";

const productsStore = useProductsStore();

const authStore = useAuthStore();
const favoriteProducts = ref([]);

onMounted(async () => {
  favoriteProducts.value = await productsStore.fetchFavoriteProducts(
    authStore.user.id
  );
  if (authStore.user === null) await authStore.getCurrentUser();
});

definePageMeta({
  layout: "custom",
  middleware: "auth",
});
</script>

<template>
  <div class="px-6 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Favorites</h1>
        <div
          v-if="favoriteProducts.length !== 0"
          class="flex justify-center items-start gap-5 flex-wrap md:justify-start my-3"
        >
          <ProductContainer
            :containerClass="'bg-color-white'"
            :productInfo="favoriteProducts"
          />
        </div>
        <div v-else class="my-10">
          <h1 class="text-lg font-semibold text-center">
            Hey Teepser! You have not liked any product
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
