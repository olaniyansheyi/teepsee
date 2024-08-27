<script setup>
import { useMenuStore } from "~/stores/menu";
import { useProductsStore } from "~/stores/product.js";
const productsStore = useProductsStore();

const menuStore = useMenuStore();
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
      <!-- <CheckoutModal /> -->
      <Spinner v-if="productsStore.isLoading" />
    </NuxtLayout>
  </div>
</template>
