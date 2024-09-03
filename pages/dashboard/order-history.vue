<script setup>
import { useOrderStore } from "~/stores/order";
import { useAuthStore } from "~/stores/auth";
const orderStore = useOrderStore();
const authStore = useAuthStore();

const orders = ref({});

onMounted(async () => {
  await authStore.fetchUser();

  if (authStore.user) {
    orders.value = await orderStore.fetchUserOrders(authStore.user.id);
  }
});

definePageMeta({
  layout: "custom",
  middleware: "auth",
});
</script>

<template>
  <div class="px-4 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Order History</h1>
        <div v-if="orderStore.isLoading" class="h-[70vh]">
          <h1 class="text-center text-2xl">Loading</h1>
        </div>
        <div
          v-if="orderStore.userOrders.length !== 0"
          class="flex flex-col gap-y-5 items-start justify-start mt-6"
        >
          <div
            v-for="order in orderStore.userOrders"
            :key="order.id"
            class="flex flex-col gap-y-1"
          >
            <div
              class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
            >
              <div
                class="w-[4rem] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
              >
                <img
                  :src="order.products[0].image"
                  class="w-[3rem] h-[80%]"
                  alt=""
                />
              </div>
              <div>
                <p>
                  {{ order.products[0].name }} and
                  {{ order.products.length + 1 }} more
                </p>
                <h2 class="font-semibold text-sm">
                  #{{ order.totalPriceCost }}
                </h2>
                <p class="text-xm text-primary">pending</p>
              </div>
            </div>
            <p class="mb-5">orderId: [{{ order.uuid }}]</p>
          </div>
        </div>
        <div
          v-if="
            orderStore.userOrders.length === 0 && orderStore.isLoading === false
          "
          class="my-10"
        >
          <h1 class="text-center text-lg">
            Hey Teepseer! You have not ordered product yet.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
