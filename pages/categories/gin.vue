<script setup>
import { useProductsStore } from "~/stores/product.js";
import cancel from "~/assets/cancel.png";
const productsStore = useProductsStore();

onMounted(() => {
  productsStore.filterByCategory("GIN");
  productsStore.toggleIsInProductPage();
  productsStore.toggleCurrentCategoryName("GIN");
});
onUnmounted(() => {
  productsStore.toggleIsInProductPage();
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div
    class="w-full flex gap-x-4 text-secondary tracking-wider px-6 mb-3 justify-between sm:justify-between items-start"
  >
    <h1 class="text-xl">Gin Category</h1>
    <button
      v-if="productsStore.priceRange.max !== Infinity"
      class="text-sm font-semibold bg-white rounded-md outline-none border-[#b1a7a7] border-2 py-2 w-[10rem] flex justify-start items-center px-2 relative"
    >
      <p class="max-w-[95%]">
        #{{ productsStore.priceRange.min }} - #{{
          productsStore.priceRange.max
        }}
      </p>
      <img
        class="absolute right-2"
        :src="cancel"
        alt=""
        @click="productsStore.clearProductFilter()"
      />
    </button>
  </div>

  <div
    class="my-5 px-6 w-full flex justify-center items-center text-center tracking-wider text-secondary"
  >
    <p
      v-if="
        productsStore.currentCategory.length === 0 &&
        productsStore.priceRange.max !== Infinity
      "
    >
      Sorry! we do not have a product between the price range you entered, clear
      the filter to continue shopping!
    </p>

    <p v-if="productsStore.currentCategory.length === 0">
      Sorry! products could not be fetched, Please check your internet
      connection
    </p>
  </div>
  <ProductsCategoriesUi :currentCategory="productsStore.currentCategory" />
</template>
