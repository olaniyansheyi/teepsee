<script setup>
import { loadStripe } from "@stripe/stripe-js";
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";
import { useOrderStore } from "~/stores/order";

const cartStore = useCartStore();
const orderStore = useOrderStore();

const totalPriceCost = computed(() => cartStore.totalPriceCost);

definePageMeta({
  layout: "custom",
});

const email = ref("");
const phoneNumber = ref("");
const address = ref("");

const cartItems = cartStore.cart;
const isProcessing = ref(false);
const stripe = ref(null);
const elements = ref(null);
const card = ref(null);
const clientSecret = ref(null);

onMounted(async () => {
  const stripePublishableKey = useRuntimeConfig().public.stripePublishableKey;

  if (!stripePublishableKey) {
    console.error("Stripe publishable key is not defined.");
    return;
  }

  stripe.value = await loadStripe(stripePublishableKey);

  const { clientSecret: secret } = await $fetch("/api/stripe/paymentintent", {
    method: "POST",
    body: { amount: totalPriceCost.value },
  });
  clientSecret.value = secret;

  elements.value = stripe.value.elements();
  card.value = elements.value.create("card");
  card.value.mount("#card-element");
});

const pay = async () => {
  isProcessing.value = true;

  const result = await stripe.value.confirmCardPayment(clientSecret.value, {
    payment_method: {
      card: card.value,
    },
  });

  if (result.error) {
    document.querySelector("#card-error").textContent = result.error.message;
    isProcessing.value = false;
  } else {
    const newOrder = {
      email: email.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      totalPriceCost: totalPriceCost.value,
      status: "pending",
      products: [...cartStore.cart],
    };

    const orderData = await orderStore.createOrder(newOrder);

    if (orderData) {
      navigateTo(`/my-order/${orderData.id}`);
    }
  }

  isProcessing.value = false;

  console.log("payment successfull: order successfully placed!");
};
</script>

<template>
  <div
    id="CheckoutPage"
    class="mx-auto text-secondary flex justify-center items-start px-4 w-full"
  >
    <div
      class="my-10 flex justify-center gap-x-10 gap-y-5 items-center mx-auto lg:flex-nowrap flex-wrap w-full"
    >
      <div
        v-if="cartItems.length !== 0"
        class="py-12 px-4 rounded-lg bg-white w-full text-secondary tracking-wide sm:w-[45%]"
      >
        <h1 class="text-2xl font-semibold">Address</h1>

        <div class="lg:w-[60%] w-full">
          <div>
            <label class="font-semibold block mt-5">Enter Address*</label>
            <div class="w-full relative">
              <input
                v-model="address"
                class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
              />
            </div>
          </div>
          <div>
            <label class="font-semibold block mt-5">Email*</label>
            <div class="w-full relative">
              <input
                v-model="email"
                class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
              />
            </div>
          </div>
          <div>
            <label class="font-semibold block mt-5">PhoneNumber*</label>
            <div class="w-full relative">
              <input
                v-model="phoneNumber"
                class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="cartItems.length === 0"
        class="font-semibold text-lg text-secondary"
      >
        <h1 class="text-xl">Your cart is empty.</h1>
        <NuxtLink to="/categories/all">Go to Shop</NuxtLink>
      </div>
      <div v-else class="w-full sm:w-[45%]">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold mb-4">Cart Items</h1>

          <ul
            class="divide-y divide-[#8f8484] border-b bg-[#e6e3e3] border-t px-5 rounded-lg"
          >
            <li v-for="item in cartItems" :key="item.id" class="py-3 space-y-1">
              <div class="flex text-sm items-center justify-between gap-4">
                <p>
                  <span class="font-bold">{{ item.quantity }}&times;</span
                  >{{ item.name }}
                </p>
                <p class="font-bold">#{{ item.quantity * item.price }}.00</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <h2 class="text-xl font-semibold">Total: #{{ totalPriceCost }}.00</h2>
        </div>
        <form @submit.prevent="pay">
          <div
            id="card-element"
            class="bg-[#e6e3e3] text-secondary border-none p-4 mt-6 font-bold"
          ></div>
          <p id="card-error" class="text-red-500"></p>
          <button
            type="submit"
            class="text-white bg-secondary hover:bg-accent-hover px-5 py-3 font-semibold rounded-lg mt-3 flex z-50"
            :disabled="isProcessing"
          >
            <span v-if="isProcessing">Processing...</span>
            <span v-else>Place Order</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
#card-element {
  border: 1px solid gray;
  padding: 20px;
  border-radius: 8px;
}
</style>
