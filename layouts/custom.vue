<script setup>
import teepseeBlack from "~/assets/teepseeBlack.png";
import searchBlack from "~/assets/searchBlack.png";
import Buy from "~/assets/icons/Buy.svg";
import menuBlack from "~/assets/menuBlack.png";
import { useMenuStore } from "~/stores/menu";

import { useCartStore } from "~/stores/cart.js";

const cartStore = useCartStore();

const menuStore = useMenuStore();

const searchQuery = ref(null);

const handleSearch = async () => {
  navigateTo(`/search-result/${searchQuery.value}`);
  menuStore.handleToggleSearch();
  searchQuery.value = "";
};
</script>

<template>
  <div class="pt-5 px-4 sm:px-8 pb-16">
    <div class="text-secondary flex justify-between items-center md:gap-x-5">
      <div class="w-[5.8rem] md:w-[16%] lg:w-[10%]">
        <img :src="teepseeBlack" alt="" class="hidden lg:block" />
        <img
          :src="menuBlack"
          class="lg:hidden block w-[25px] cursor-pointer"
          alt=""
          @click="menuStore.handleToggleMenu"
        />
      </div>
      <div class="hidden lg:flex justify-center gap-x-6 items-center w-auto">
        <form @submit.prevent="handleSearch" class="relative text-secondary">
          <input
            v-model="searchQuery"
            required
            type="text"
            class="pl-8 pr-4 py-1 border border-secondary rounded-lg outline-none w-full bg-transparent placeholder:text-secondary"
            placeholder="Search"
          />
          <img
            :src="searchBlack"
            alt="Search Icon"
            class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary"
          />
        </form>
        <nav
          class="flex justify-center items-center gap-x-4 font-semibold tracking-wider text-md"
        >
          <NuxtLink to="/track-order">Track Order</NuxtLink>
          <NuxtLink to="/faq">FAQs</NuxtLink>
          <NuxtLink to="/login">Login</NuxtLink>
          <NuxtLink to="/cart" class="flex gap-x-1 items-center justify-center">
            <img :src="Buy" alt="" />
            <p>Cart</p>
          </NuxtLink>
        </nav>
      </div>
      <NuxtLink to="/signup">
        <button
          class="px-5 py-1 bg-primary border-none rounded-md text-white lg:block hidden"
        >
          Sign Up
        </button>
      </NuxtLink>
      <div class="lg:hidden flex justify-center items-center gap-x-3">
        <img
          :src="searchBlack"
          alt=""
          @click="menuStore.handleToggleSearch"
          class="w-[28px]"
        />
        <NuxtLink to="/cart" class="relative w-[28px]">
          <img :src="Buy" alt="" class="w-[28px]" />
          <div
            class="absolute w-[15px] h-[15px] rounded-full items-center justify-center flex bg-primary text-white top-[0] right-[0]"
          >
            <p class="text-[10px]">{{ cartStore.cartItemCount }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>

  <slot />

  <Footer />
</template>
