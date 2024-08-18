<script setup>
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
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
