<script setup>
definePageMeta({
  layout: "custom",
});

import { useRoute } from "vue-router";
import { useOrderStore } from "~/stores/order";

const route = useRoute();

const orderStore = useOrderStore();

const orderId = route.params.id;

onMounted(async () => {
  await orderStore.getOrder(orderId);
});

const order = computed(() => orderStore.order);
const isOrderEmpty = computed(
  () => !order.value || Object.keys(order.value).length === 0
);

console.log(order.value);
</script>

<template>
  <div
    v-if="!isOrderEmpty"
    class="px-4 my-5 flex gap-5 justify-center items-center w-full"
  >
    <div
      class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide md:w-[70%] mx-auto"
    >
      <h1 class="text-2xl font-semibold">Order History</h1>
      <div
        class="flex flex-col gap-y-5 items-start justify-start mt-2 font-semibold"
      >
        <p>Items in the Order (Not Yet Delivered)</p>
        <!-- <div
          v-for="product in order.value.products"
          :key="product.id"
          class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
        >
          <div
            class="w-[92px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
          >
            <img :src="product.image" class="w-[70%] h-[80%]" alt="" />
          </div>
          <div>
            <p>{{ product.name }} and {{ product.quantity }} other drinks</p>
            <h2 class="font-semibold text-sm">#50,000</h2>
            <p
              :class="
                order.value.status === 'pending'
                  ? 'text-primary'
                  : 'text-green-400'
              "
              class="text-xm"
            >
              {{ order.value.status }}
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <Spinner v-if="orderStore.isLoading" />
</template>
