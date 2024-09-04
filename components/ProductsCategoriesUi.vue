<script setup>
import unknownUser from "~/assets/unknownUser.png";

import AddUser from "~/assets/AddUser.png";
import Bag from "~/assets/icons/Bag.svg";
import Heart from "~/assets/icons/Heart.svg";
import { useProductsStore } from "~/stores/product.js";
import Logout from "~/assets/icons/Logout.svg";
import Setting from "~/assets/icons/Setting.svg";

const productsStore = useProductsStore();
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const { $toast } = useNuxtApp();

onMounted(async () => {
  if (authStore.user === null) await authStore.getCurrentUser();
});

const minPrice = ref("");
const maxPrice = ref("");

function onSetPriceRange() {
  const min = parseFloat(minPrice.value) || 0;
  const max = parseFloat(maxPrice.value) || Infinity;
  productsStore.setPriceRange(min, max);
  minPrice.value = "";
  maxPrice.value = "";
}

function onSelectPriceRange(range) {
  productsStore.selectPriceRange(range);
}

onMounted(async () => {
  await authStore.getAvatarUrl();
});

function handleGoToProfile() {
  if (authStore.user) {
    navigateTo("/dashboard/profile");
  } else {
    navigateTo("/login");
  }

  menuStore.handleToggleMenu();
}

function handleGoToRoute(route) {
  navigateTo(route);
}

async function handleLogout() {
  await authStore.logout();

  if (!authStore.user) $toast.success("You successfully logged out!");
}

const avatar_url = computed(() => authStore.avatar_url);

const props = defineProps({
  currentCategory: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="mx-5 mb-8 flex justify-start items-start gap-5">
    <div
      class="w-[400px] bg-white overflow-y-auto rounded-lg md:block hidden h-[80vh]"
    >
      <div class="w-full h-full">
        <div class="pt-5 px-6 space-y-3">
          <div class="flex gap-x-3 justify-start items-center">
            <div>
              <img
                :src="avatar_url || unknownUser"
                class="w-[90px] rounded-full"
                alt=""
              />
            </div>
            <div v-if="authStore.user">
              <h1 class="text-md">
                {{ authStore.user.user_metadata.fullName }}
              </h1>
              <p class="text-sm text-primary">Teepseer</p>
            </div>
          </div>
          <div
            class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg cursor-pointer mb-5"
          >
            <div class="flex items-center justify-center gap-x-6">
              <img :src="AddUser" alt="" />
              <p @click="handleGoToProfile" class="cursor-pointer">Profile</p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Bag" alt="" />
              <p @click="handleGoToRoute('/track-order')">Track Orders</p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Heart" alt="" />
              <p @click="handleGoToRoute('/dashboard/favorites')">Favourites</p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Heart" alt="" />
              <p @click="handleGoToRoute('/faq')">F.A.Q</p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Bag" alt="" />
              <p @click="handleGoToRoute('/dashboard/order-history')">
                My Orders
              </p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Setting" alt="" />
              <p @click="handleGoToRoute('/dashboard/setting/change-password')">
                Settings
              </p>
            </div>

            <div
              v-if="authStore.user"
              @click="handleLogout"
              class="flex items-center justify-center gap-x-6"
            >
              <img :src="Logout" alt="" />
              <p>Logout</p>
            </div>
          </div>

          <div
            v-if="!authStore.user"
            class="flex flex-col items-start gap-y-4 text-white"
          >
            <button
              @click="
                () => {
                  menuStore.handleToggleMenu();
                  navigateTo('/login');
                }
              "
              class="bg-secondary rounded-lg py-3 w-[9rem]"
            >
              Login
            </button>
            <button
              @click="
                () => {
                  menuStore.handleToggleMenu();
                  navigateTo('/signup');
                }
              "
              class="bg-primary rounded-lg py-3 w-[9rem]"
            >
              Sign Up
            </button>
          </div>

          <div
            v-if="productsStore.isInProductPage"
            class="flex flex-col gap-y-4"
          >
            <div class="mx-auto space-y-1 tracking-wider">
              <h1 class="text-lg">Custom Price range</h1>
              <form
                class="flex gap-x-1 w-full"
                @submit.prevent="onSetPriceRange"
              >
                <input
                  type="text"
                  class="bg-[#e6e3e3] py-1 outline-none rounded-lg border-[#b1a7a7] w-1/3 text-center border-2"
                  placeholder="Min"
                  v-model="minPrice"
                />
                <input
                  type="text"
                  class="bg-[#e6e3e3] py-1 outline-none rounded-lg border-[#b1a7a7] w-1/3 text-center border-2"
                  placeholder="Max"
                  v-model="maxPrice"
                />
                <button
                  type="submit"
                  class="text-white rounded-lg py-1 px-4 bg-secondary"
                >
                  GO
                </button>
              </form>
            </div>

            <div class="me-auto space-y-1 tracking-wider">
              <h1 class="text-lg">Prices</h1>
              <div
                class="flex gap-y-4 flex-col w-full justify-end items-start font-semibold text-md"
              >
                <div class="flex justify-center items-center gap-x-3">
                  <input
                    type="radio"
                    name="priceRange"
                    @click="onSelectPriceRange('under10000')"
                  />
                  <p>Under #10,000</p>
                </div>
                <div class="flex justify-center items-center gap-x-3">
                  <input
                    type="radio"
                    name="priceRange"
                    @click="onSelectPriceRange('10000to50000')"
                  />
                  <p>#10,000-#50,000</p>
                </div>
                <div class="flex justify-center items-center gap-x-3">
                  <input
                    type="radio"
                    name="priceRange"
                    @click="onSelectPriceRange('51000to150000')"
                  />
                  <p>#51,000-#150,000</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start gap-y-5 tracking-wider">
            <button
              class="py-4 text-left border-[#999999] border-b-[1px] text-primary text-lg w-full"
            >
              OUR CATEGORIES
            </button>

            <div
              class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg mb-10"
            >
              <NuxtLink to="/categories/all">General</NuxtLink>
              <NuxtLink to="/categories/champagne">Champagne</NuxtLink>
              <NuxtLink to="/categories/herb">Herb</NuxtLink>
              <NuxtLink to="/categories/gin">Gin</NuxtLink>
              <NuxtLink to="/categories/brandy">Brandy</NuxtLink>
              <NuxtLink to="/categories/cognac">Cognac</NuxtLink>
              <NuxtLink to="/categories/whiskey">Whiskey</NuxtLink>
              <NuxtLink to="/categories/vodka">Vodka</NuxtLink>
              <NuxtLink to="/categories/tequila">Tequila</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-start lg:items-start items-center gap-5 flex-wrap md:justify-start my-3 w-full"
    >
      <ProductContainer :productInfo="props.currentCategory" />
    </div>
  </div>

  <div class="mx-5">
    <RecentProductList />
  </div>
</template>
