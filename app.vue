<script setup>
import { useMenuStore } from "~/stores/menu";

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
    </NuxtLayout>
  </div>
</template>
