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
    </NuxtLayout>
  </div>
</template>
