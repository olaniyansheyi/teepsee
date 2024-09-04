<script setup>
definePageMeta({
  layout: "custom",
});

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useOrderStore } from "~/stores/order";
import { useMenuStore } from "~/stores/menu";
import { useProductsStore } from "~/stores/product";

const productStore = useProductsStore();

const route = useRoute();
const menuStore = useMenuStore();
const orderStore = useOrderStore();

const orderId = route.params.id;
const order = ref(null);

const error = ref(null);

onMounted(async () => {
  try {
    const data = await orderStore.getOrder(orderId);
    if (data) {
      order.value = data;
    } else {
      throw new Error(
        "could not find your product ordered, please patiently check the orderId and try again."
      );
    }
  } catch (err) {
    error.value =
      "could not find your product ordered, please patiently check the orderId and try again.";
  }
});

const handleShowRatingModal = function () {
  productStore.handleSetProductIdForRating(orderId);
  menuStore.handleToggleShowRatingModal();
};
</script>

<template>
  <Spinner v-if="orderStore.isLoading" />

  <div
    v-else-if="error"
    class="text-red-500 h-[80vh] justify-center items-center flex px-4"
  >
    <h1 class="font-semibold text-lg">{{ error }}</h1>
  </div>

  <div
    v-else-if="order"
    class="px-4 my-5 flex gap-5 justify-center items-center w-full"
  >
    <div
      class="py-12 px-3 rounded-lg bg-white w-full text-secondary tracking-wide md:w-[70%] mx-auto"
    >
      <h1 class="text-2xl font-semibold">Order Info</h1>
      <div
        class="flex flex-col gap-y-5 items-start justify-start mt-2 font-semibold"
      >
        <p>Your OrderId: [{{ order.uuid }}]</p>

        <div
          v-for="product in order.products"
          :key="product.id"
          class="flex justify-between items-start flex-nowrap w-full"
        >
          <div class="flex justify-start gap-x-3 items-start">
            <div
              class="w-[100px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
            >
              <img :src="product.image" class="w-[80%] h-[80%]" alt="" />
            </div>
            <div>
              <p>{{ product.name }}</p>
              <p>Quantity: {{ product.quantity }}</p>
              <h2 class="font-semibold text-sm">#{{ product.price }}</h2>
              <p
                :class="
                  order.status === 'pending' ? 'text-primary' : 'text-green-400'
                "
                class="text-xm"
              >
                {{ order.status }}
              </p>
            </div>
          </div>
          <button
            @click="handleShowRatingModal"
            class="bg-none py-1 sm:px-2 px-1 w-auto text-primary mb-3 rounded-md text-sm w"
          >
            Rate this product!
          </button>
        </div>
      </div>
      <div class="w-full flex justify-start items-center flex-wrap mt-6 gap-4">
        <NuxtLink to="/categories/all">
          <button
            class="py-3 px-6 rounded-lg font-semibold text-white bg-secondary"
          >
            Continue shopping!
          </button>
        </NuxtLink>
        <button
          class="py-3 px-8 rounded-lg font-semibold text-white bg-primary"
        >
          Contact for help!
        </button>
      </div>
    </div>
  </div>

  <div v-else>
    <p>No order data available.</p>
  </div>
</template>
