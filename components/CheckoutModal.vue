<script setup>
import teepseeHalf from "~/assets/teepseeHalf.png";
import teepseeBlack from "~/assets/teepseeBlack.png";
import cancelBlack from "~/assets/cancelBlack.png";

import { useMenuStore } from "~/stores/menu.js";

const menuStore = useMenuStore();
</script>
<template>
  <div class="z-10 fixed inset-0 bg-black bg-opacity-50"></div>
  <div
    class="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg px-6 pb-5 flex flex-col justify-start items-start gap-y-5 text-secondary tracking-wider z-20 w-[85%] sm:w-[50%] lg:w-[30%]"
  >
    <div class="relative w-full h-full pb-20">
      <img
        :src="cancelBlack"
        class="absolute top-5 right-0 w-[20px] cursor-pointer"
        alt=""
      />
      <img
        :src="teepseeHalf"
        class="w-[4rem] absolute top-0 left-[-6.5%]"
        alt=""
      />
    </div>
    <div>
      <h1 class="text-xl mb-2">Hello Teepser</h1>
      <p>Choose any of the options that suits you</p>
    </div>
    <button
      @click="menuStore.handleToggleShowCheckoutModal"
      class="w-full text-center text-white bg-secondary rounded-md py-2 mt-2"
    >
      Login and Checkout
    </button>
    <NuxtLink
      to="/checkout"
      @click="menuStore.handleToggleShowCheckoutModal"
      class="w-full text-center text-white bg-primary rounded-md py-2"
    >
      <button>Checkout without Login</button>
    </NuxtLink>

    <img :src="teepseeBlack" class="w-[6rem] mx-auto" alt="" />
  </div>
</template>
