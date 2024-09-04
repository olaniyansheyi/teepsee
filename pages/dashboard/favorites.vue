<script setup>
import Heart from "~/assets/icons/Heart.svg";

import { useAuthStore } from "~/stores/auth";

import { useProductsStore } from "~/stores/product.js";

import heartRed from "~/assets/heartRed.png";

import blackSpinner from "~/assets/blackSpinner.png";

const productsStore = useProductsStore();

const authStore = useAuthStore();
const isLiking = ref(new Set());
const favoriteProducts = ref([]);

onMounted(async () => {
  favoriteProducts.value = await productsStore.fetchFavoriteProducts(
    authStore.user.id
  );
  if (authStore.user === null) await authStore.getCurrentUser();
});

const toggleFavorite = async (product) => {
  isLiking.value.add(product.uuid);

  const updateFavoriteStatus = await productsStore.toggleFavorite(
    product.uuid,
    authStore.user.id
  );
  if (product) {
    product.favorite = updateFavoriteStatus;
    isLiking.value.delete(product.uuid);
  }

  //calling the fnx again so as to update the UI immediately
  favoriteProducts.value = await productsStore.fetchFavoriteProducts(
    authStore.user.id
  );
};

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
