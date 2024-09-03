<script setup>
import { useMenuStore } from "~/stores/menu";
import { useProductsStore } from "~/stores/product.js";

import { useAuthStore } from "~/stores/auth.js";

const authStore = useAuthStore();
const productsStore = useProductsStore();

const menuStore = useMenuStore();

onMounted(() => {
  productsStore.getProducts();
});

// onMounted(async () => {
//   await authStore.getCurrentUser();
// });

onBeforeMount(async () => {
  await authStore.getCurrentUser();
});
</script>

<template>
  <div class="relative">
    <NuxtLayout>
      <NuxtPage />
      <SearchTab v-if="menuStore.openSearchQuery" />
      <InfoModal v-if="menuStore.showInfoModal" />
      <Menu v-if="menuStore.openMenu" />
      <RatingModal v-if="menuStore.showRatingModal" />
      <TrackingModal v-if="menuStore.showTrackingModal" />
      <CheckoutModal v-if="menuStore.showCheckoutModal" />
      <Spinner v-if="productsStore.isLoading" />
    </NuxtLayout>
  </div>
</template>
