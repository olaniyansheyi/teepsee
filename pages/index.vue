<script setup>
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();

onMounted(() => {
  setTimeout(() => {
    menuStore.showInfoModal = true;
  }, 7000);
});
</script>
<template>
  <div class="relative">
    <Hero />
    <Services />
    <ProductsCategory />
    <Testimonial />
    <Footer />
    <Menu v-if="menuStore.openMenu" />
  </div>
</template>
