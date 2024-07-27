<script setup>
import logo from "~/public/logo.png";
import searchIcon from "~/public/search.svg";
import cart from "~/public/cart.svg";
import menu from "~/public/menu.png";
</script>

<template>
  <div
    class="text-white flex justify-between items-center  sm:gap-x-5"
  >
    <div class="w-[5.8rem] sm:w-[13%] lg:w-[10%]">
      <img :src="logo" alt="" />
    </div>
    <div class="hidden sm:flex justify-center gap-x-6 items-center w-auto">
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
      <nav class="flex justify-center items-center gap-x-4 font-extralight tracking-wider text-sm ">
        <p>Track Order</p>
        <p>FAQs</p>
        <p>Login</p>
        <p class="flex gap-x-1 items-center justify-center">
          <img :src="cart" alt="" />
          <p>Cart</p>
        </p>
      </nav>
    </div>
    <button class="px-5 py-1 bg-white border-none rounded-md text-secondary sm:block hidden"> Sign Up</button>
    <div class="sm:hidden flex justify-center items-center gap-x-3 ">
        <img :src="searchIcon" alt="">
        <img :src="menu" alt="">
    </div>
  </div>
</template>
