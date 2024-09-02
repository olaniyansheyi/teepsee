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

const products = orderStore.userOrders.flatMap((order) => order.products);

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
        <div class="flex flex-col gap-y-5 items-start justify-start mt-6">
          <div
            v-for="product in products"
            :key="product.id"
            class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
          >
            <div
              class="w-[92px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
            >
              <img :src="product.image" class="w-[70%] h-[80%]" alt="" />
            </div>
            <div>
              <p>{{ product.name }}</p>
              <h2 class="font-semibold text-sm">#{{ product.price }}</h2>
              <p class="text-xm text-primary">pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
