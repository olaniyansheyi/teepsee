<script setup>
import { useProductsStore } from "~/stores/product.js";
import { useCartStore } from "~/stores/cart.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

const productStore = useProductsStore();
const cartStore = useCartStore();

const route = useRoute();
const productId = Number(route.params.id);

const product = ref(null);
const loading = ref(true);

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.getProducts();
  }

  product.value = productStore.getProductById(productId);
  loading.value = false;
});

function increaseQuantity() {
  productStore.increaseQuantity(productId);
}

function decreaseQuantity() {
  productStore.decreaseQuantity(productId);
}

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
          <div class="my-1">{{ product.quantity }}</div>
          <button
            @click="decreaseQuantity"
            class="py-[2px] ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
          >
            -
          </button>
          <button
            @click="increaseQuantity"
            class="py-[2px] ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
          >
            +
          </button>
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

          <NuxtLink to="/checkout">
            <button class="rounded-lg py-2 w-full sm:w-[48%] bg-primary">
            Checkout Now
          </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <RecentProductList />
  </div>
</template>
