<script setup>
import logo from "~/assets/logo.png";
import searchIcon from "~/assets/search.svg";
import cart from "~/assets/cart.svg";
import menu from "~/assets/menu.png";
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();

const searchQuery = ref(null);

const handleSearch = async () => {
  navigateTo(`/search-result/${searchQuery.value}`);
  menuStore.handleToggleSearch();
  searchQuery.value = "";
};
</script>

<template>
  <div class="text-white flex justify-between items-center lg:gap-x-5">
    <div class="w-[5.8rem] md:w-[16%] lg:w-[18%] cursor-pointer">
      <NuxtLink to="/">
        <img :src="logo" alt="" />
      </NuxtLink>
    </div>
    <div class="hidden lg:flex justify-center gap-x-6 items-center w-auto">
      <form @submit.prevent="handleSearch" class="relative text-white">
        <input
          required
          v-model="searchQuery"
          type="text"
          class="pl-8 pr-4 py-1 border border-white rounded-lg outline-none w-full bg-transparent placeholder:text-white"
          placeholder="Search"
        />
        <img
          :src="searchIcon"
          alt="Search Icon"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
        />
      </form>
      <nav
        class="flex justify-center items-center gap-x-4 font-extralight tracking-wider text-md"
      >
        <NuxtLink to="/track-order">Track Order</NuxtLink>
        <NuxtLink to="/faq">FAQs</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
        <NuxtLink to="/cart" class="flex gap-x-1 items-center justify-center">
          <img :src="cart" alt="" />
          <p>Cart</p>
        </NuxtLink>
      </nav>
    </div>
    <NuxtLink to="/signup">
      <button
        class="px-5 py-1 bg-white border-none rounded-md text-secondary lg:block hidden"
      >
        Sign Up
      </button>
    </NuxtLink>
    <div
      class="lg:hidden flex justify-center items-center gap-x-3 cursor-pointer"
    >
      <img :src="searchIcon" alt="" @click="menuStore.handleToggleSearch" />
      <img
        :src="menu"
        alt=""
        @click="menuStore.handleToggleMenu"
        class="w-[25px]"
      />
    </div>
  </div>
</template>
