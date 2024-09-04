<script setup>
import { useProductsStore } from "~/stores/product.js";
import { useCartStore } from "~/stores/cart.js";
import { useAuthStore } from "~/stores/auth.js";
import { useMenuStore } from "~/stores/menu.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

const productStore = useProductsStore();
const cartStore = useCartStore();
const authStore = useAuthStore();
const menuStore = useMenuStore();

const route = useRoute();
const productId = route.params.id;

const product = ref(null);
const loading = ref(true);

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.getProducts();
  }

  product.value = productStore.getProductById(productId);
  loading.value = false;
});

const isInCart = computed(() => {
  return cartStore.isInCart(productId);
});

function handleCartAction() {
  if (isInCart.value) {
    cartStore.handleDeleteFromCart(productId);
  } else {
    cartStore.handleAddToCart(product.value);
  }
}

function handleCheckAuth() {
  if (authStore.user) {
    navigateTo("/checkout");
  } else {
    menuStore.handleToggleShowCheckoutModal();
  }
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="mt-5 mb-10 px-4 sm:px-8">
    <div v-if="loading">
      <Spinner />
    </div>
    <div
      v-else
      class="w-full flex text-secondary gap-5 justify-center items-center flex-wrap"
    >
      <div
        class="bg-white flex justify-center items-center rounded-lg sm:h-[500px] h-[350px] w-full md:w-[48%]"
      >
        <img :src="product.image" alt="" class="w-[60%]" />
      </div>

      <div
        class="bg-white rounded-lg sm:h-[500px] w-full md:w-[48%] p-10 text-left text-secondary tracking-wider flex items-start justify-start gap-y-1 flex-col"
      >
        <div class="w-full flex justify-between items-center">
          <h1 class="text-xl font-semibold">{{ product.name }}</h1>
          <p class="gray-white-text">200 Ratings</p>
        </div>
        <h2 class="text-2xl font-semibold">
          #{{ product.price * product.quantity }}.00
        </h2>
        <p class="text-xs gray-white-text">Quantity</p>
        <div>
          <div>{{ product.quantity }}</div>
        </div>
        <h1 class="text-md font-semibold mt-1">Product description</h1>
        <p class="text-[#666666]">
          {{ product.description }}
        </p>
        <div
          class="mt-3 flex flex-wrap w-full gap-2 justify-center items-center text-white"
        >
          <button
            @click="handleCartAction"
            class="rounded-lg py-2 w-full sm:w-[48%] bg-secondary"
          >
            {{ isInCart ? "Remove From Cart" : "Add To Cart" }}
          </button>

          <button
            @click="handleCheckAuth"
            class="rounded-lg py-2 w-full sm:w-[48%] bg-primary flex justify-center items-center"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
    <RecentProductList />
  </div>
</template>
