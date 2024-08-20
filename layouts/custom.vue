<script setup>
import teepseeBlack from "~/assets/teepseeBlack.png";
import searchBlack from "~/assets/searchBlack.png";
import Buy from "~/assets/icons/Buy.svg";
import menuBlack from "~/assets/menuBlack.png";
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();

</script>

<template>
    <div class="pt-5 px-4 sm:px-8 pb-16">
        <div
    class="text-secondary flex justify-between items-center  md:gap-x-5"
  >
    <div class="w-[5.8rem] md:w-[13%] lg:w-[10%]">
      <img :src="teepseeBlack" alt="" class="hidden sm:block"/>
      <img :src="menuBlack" class="sm:hidden block w-[25px]" alt="" @click="menuStore.handleToggleMenu">
    </div>
    <div class="hidden md:flex justify-center gap-x-6 items-center w-auto">
      <div class="relative text-secondary">
        <input
          type="text"
          class="pl-8 pr-4 py-1 border border-secondary rounded-lg outline-none w-full bg-transparent placeholder:text-secondary"
          placeholder="Search"
        />
        <img
          :src="searchBlack"
          alt="Search Icon"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary"
        />
      </div>
      <nav class="flex justify-center items-center gap-x-4 font-semibold tracking-wider text-md ">
        <p>Track Order</p>
        <p>FAQs</p>
        <p>Login</p>
        <p class="flex gap-x-1 items-center justify-center">
          <img :src="Buy" alt="" />
          <p>Cart</p>
        </p>
      </nav>
    </div>
    <button class="px-5 py-1 bg-primary border-none rounded-md text-white md:block hidden"> Sign Up</button>
    <div class="md:hidden flex justify-center items-center gap-x-3 ">
        <img :src="searchBlack" alt="" @click="menuStore.handleToggleSearch" class="w-[28px]">
       <div class="relative w-[28px]">
        <img :src="Buy" alt="" class="w-[28px]"/>
        <div class="absolute w-[15px] h-[15px] rounded-full items-center justify-center flex bg-primary text-white top-[0] right-[0]">
          <p class="text-[10px]">0</p>
        </div>
       </div>
    </div>
  </div>
    </div>

<slot />

    <Footer />
</template>