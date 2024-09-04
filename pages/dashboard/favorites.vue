<script setup>
import Heart from "~/assets/icons/Heart.svg";

import { useAuthStore } from "~/stores/auth";

import { useProductsStore } from "~/stores/product.js";

import heartRed from "~/assets/heartRed.png";

import blackSpinner from "~/assets/blackSpinner.png";

const productsStore = useProductsStore();

const authStore = useAuthStore();
const isLiking = ref(new Set());
const favoriteProducts = ref([]);

onMounted(async () => {
  favoriteProducts.value = await productsStore.fetchFavoriteProducts(
    authStore.user.id
  );
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

  //calling the fnx again so as to update the UI immediately
  favoriteProducts.value = await productsStore.fetchFavoriteProducts(
    authStore.user.id
  );
};

definePageMeta({
  layout: "custom",
  middleware: "auth",
});
</script>

<template>
  <div class="px-6 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Favorites</h1>
        <div
          v-if="favoriteProducts.length !== 0"
          class="flex justify-center items-start gap-5 flex-wrap md:justify-start my-3"
        >
          <div
            v-for="product in favoriteProducts"
            class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] h-[260px] w-[45%] bg-[#e6e3e3] rounded-lg py-3 px-3 relative"
          >
            <div
              class="border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
            >
              <img class="max-[5rem]" :src="product.image" alt="" />
            </div>
            <div class="flex justify-between items-start w-full my-3 flex-col">
              <span class="flex-wrap flex justify-start items-start flex-col">
                <h1 class="text-md font-semibold">{{ product.name }}</h1>
                <p class="text-[#666666]">{{ product.category }}</p>
              </span>
              <h2 class="font-semibold text-md">#{{ product.price }}</h2>
            </div>
            <div
              class="w-[25px] absolute top-3 right-4"
              @click.stop="toggleFavorite(product)"
            >
              <img
                v-if="isLiking.has(product.uuid)"
                :src="blackSpinner"
                alt=""
              />

              <img v-else :src="product.favorite ? heartRed : Heart" alt="" />
            </div>
          </div>
        </div>
        <div v-else class="my-10">
          <h1 class="text-lg font-semibold text-center">
            Hey Teepser! You have not liked any product
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
