<script setup>
import { useProductsStore } from "~/stores/product";
import Heart from "~/assets/icons/Heart.svg";

const productStore = useProductsStore();

definePageMeta({
  layout: "custom",
});

const route = useRoute();

const searchedProducts = ref(null);

const error = ref(null);

watch(
  () => route.params.query,
  async (newQuery) => {
    if (newQuery) {
      try {
        const data = await productStore.searchProducts(newQuery);
        searchedProducts.value = data || [];
      } catch (err) {
        error.value = "No product found for your query";
      }
    }
  },
  { immediate: true }
);

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
};
</script>

<template>
  <div
    v-if="productStore.searchedProducts.length === 0"
    class="px-6 h-[70vh] flex justify-center items-center tracking-wider"
  >
    <h1 class="mx-auto text-center text-xl">
      No product found for your search
    </h1>
  </div>
  <div
    v-if="productStore.searchedProducts"
    class="flex justify-center lg:items-start items-center gap-5 flex-wrap md:justify-start my-3 w-full"
  >
    <ProductContainer :productInfo="searchedProducts" />
  </div>
</template>
