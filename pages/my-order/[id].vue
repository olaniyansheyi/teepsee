<script setup>
definePageMeta({
  layout: "custom",
});

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useOrderStore } from "~/stores/order";

const route = useRoute();
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
      class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide md:w-[70%] mx-auto"
    >
      <h1 class="text-2xl font-semibold">Order History</h1>
      <div
        class="flex flex-col gap-y-5 items-start justify-start mt-2 font-semibold"
      >
        <p>Your OrderId: [{{ order.uuid }}]</p>

        <div
          v-for="product in order.products"
          :key="product.id"
          class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
        >
          <div
            class="w-[100px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
          >
            <img :src="product.image" class="w-[80%] h-[80%]" alt="" />
          </div>
          <div>
            <p>{{ product.name }} Quantity: {{ product.quantity }}</p>
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
