<script setup>
import product1 from "~/assets/product1.png";
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div
    class="mt-20 w-full flex text-secondary gap-5 justify-center items-center px-4 sm:px-8"
  >
    <div
      class="bg-white flex justify-center items-center rounded-lg h-[500px] w-full md:w-[48%]"
    >
      <img :src="product1" alt="" />
    </div>
  </div>
</template>
