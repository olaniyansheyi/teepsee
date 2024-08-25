<script setup>
import logo from "~/assets/logo.png";
import searchIcon from "~/assets/search.svg";
import cart from "~/assets/cart.svg";
import menu from "~/assets/menu.png";
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
</script>

<template>
  <div
    class="text-white flex justify-between items-center  lg:gap-x-5 "
  >
    <div class="w-[5.8rem] md:w-[16%] lg:w-[18%] cursor-pointer">
      <img :src="logo" alt="" />
    </div>
    <div class="hidden lg:flex justify-center gap-x-6 items-center w-auto">
      <div class="relative text-white">
        <input
          type="text"
          class="pl-8 pr-4 py-1 border border-white rounded-lg outline-none w-full bg-transparent placeholder:text-white"
          placeholder="Search"
        />
        <img
          :src="searchIcon"
          alt="Search Icon"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
        />
      </div>
      <nav class="flex justify-center items-center gap-x-4 font-extralight tracking-wider text-md ">
        <p>Track Order</p>
        <p>FAQs</p>
        <p>Login</p>
        <p class="flex gap-x-1 items-center justify-center">
          <img :src="cart" alt="" />
          <p>Cart</p>
        </p>
      </nav>
    </div>
    <button class="px-5 py-1 bg-white border-none rounded-md text-secondary lg:block hidden"> Sign Up</button>
    <div class="lg:hidden flex justify-center items-center gap-x-3 cursor-pointer ">
        <img :src="searchIcon" alt="" @click="menuStore.handleToggleSearch">
        <img :src="menu" alt="" @click="menuStore.handleToggleMenu" class="w-[25px]">
    </div>
  </div>
</template>
