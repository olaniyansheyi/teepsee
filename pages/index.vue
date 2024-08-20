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

    <div class="my-40"></div>
    <Footer />
  </div>
</template>
