<script setup>
import modalImg from "~/assets/modalImg.png";
import cancelCircle from "~/assets/cancelCircle.png";

import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
</script>

<template>
  <div class="z-10 fixed inset-0 bg-black bg-opacity-50"></div>
  <div
    class="md:w-[400px] w-[85%] h-auto rounded-xl bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
  >
    <div class="relative w-full h-full">
      <img
        :src="cancelCircle"
        class="absolute top-5 right-5 w-[30px] cursor-pointer"
        alt=""
        @click="menuStore.handleToggleShowInfoModal"
      />
    </div>

    <img :src="modalImg" alt="" class="rounded-t-xl w-full" />
    <div
      class="mt-5 flex flex-col items-center gap-y-5 justify-center text-center px-6 pb-6"
    >
      <div class="space-y-3 text-secondary tracking-wider">
        <h1 class="font-semibold text-xl">Welcome to Teepsee</h1>
        <p>Please drink responsibly</p>
        <p>Confirm if you are eligible to visit this site</p>
      </div>
      <div class="space-y-3 text-white tracking-wider">
        <button
          @click="menuStore.handleToggleShowInfoModal"
          class="w-full py-4 rounded-lg bg-secondary"
        >
          I am 18 years and above
        </button>
        <button
          @click="menuStore.handleToggleShowInfoModal"
          class="w-full py-4 rounded-lg bg-primary"
        >
          I am below 18 years
        </button>
      </div>
    </div>
  </div>
</template>
