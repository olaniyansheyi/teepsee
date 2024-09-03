<script setup>
import Heart from "~/assets/icons/Heart.svg";
import heartRed from "~/assets/heartRed.png";
import blackSpinner from "~/assets/blackSpinner.png";

import { useProductsStore } from "~/stores/product";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const isLiking = ref(new Set());

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.getProducts();
  productsStore.fetchRecentlyViewedProducts();

  if (authStore.user === null) await authStore.getCurrentUser();
});

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
  <div class="text-secondary tracking-wider my-8">
    <h1 class="font-semibold text-xl mb-10">Recently Viewed Items</h1>

    <div
      v-if="productsStore.recentlyViewedProducts.length !== 0"
      class="flex justify-center lg:items-start items-start gap-5 flex-wrap md:justify-start my-3"
    >
      <div
        v-for="product in productsStore.recentlyViewedProducts"
        :key="product.uuid"
        @click="productsStore.navigateToProduct(product.uuid)"
        class="text-secondary w-[45%] md:w-[40%] lg:w-[21%] h-[280px] bg-white rounded-lg py-5 sm:px-8 px-2 relative cursor-pointer"
      >
        <div
          class="h-[50%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="max-h-[5rem]" :src="product.image" alt="" />
        </div>
        <div class="flex justify-between items-start w-full my-3 flex-col">
          <span class="flex justify-start items-start flex-col">
            <h1 class="text-md font-semibold">{{ product.name }}</h1>
            <p class="text-[#666666]">{{ product.category }}</p>
          </span>
          <h2 class="font-semibold text-md">#{{ product.price }}</h2>
        </div>
        <div
          class="w-[25px] absolute top-3 right-4"
          @click.stop="toggleFavorite(product)"
        >
          <img v-if="isLiking.has(product.uuid)" :src="blackSpinner" alt="" />

          <img v-else :src="product.favorite ? heartRed : Heart" alt="" />
        </div>
      </div>
    </div>

    <div v-else class="my-10">
      <h2 class="pb-10 text-lg font-semibold tracking-wider text-center">
        You have not viewed any product Yet.
      </h2>
    </div>
  </div>
</template>
