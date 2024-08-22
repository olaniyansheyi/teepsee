<script setup>
import cancel from "~/assets/cancel.png";
import activeCheckMark from "~/assets/activeCheckMark.png";

import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
</script>

<template>
  <div class="z-10 fixed inset-0 bg-black bg-opacity-50"></div>
  <div
    class="md:w-[400px] w-[90%] h-auto rounded-xl bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 px-6 py-10 flex flex-col gap-y-2 text-secondary justify-center items-center"
  >
    <div class="relative w-full h-full">
      <img
        :src="cancel"
        class="absolute top-0 right-0 w-[20px]"
        alt=""
        @click="menuStore.handleToggleShowRatingModal"
      />
    </div>
    <div
      class="flex justify-center items-end text-center py-4 w-full border-b-2 border-b-[#e3e6e6] border-dotted"
    >
      <div class="">
        <h1 class="font-semibold text-xl">Track Order</h1>
        <p class="text-sm">Destination, Ibadan, Nigeria</p>
        <p class="text-sm">Tracking No: EHS2348798</p>
      </div>
    </div>
    <div
      class="px-2 flex flex-col gap-y-2 justify-start items-start w-full border-s-4 border-[#0AA06E]"
    >
      <div class="w-full flex justify-start items-start gap-x-4 mt-3">
        <img :src="activeCheckMark" alt="" />
        <div class="flex flex-col justify-start items-start">
          <p class="font-semibold">Pending</p>
          <p>Nov 9, 2020, 12:58P.M</p>
        </div>
      </div>
      <div class="w-full flex justify-start items-start gap-x-4 mt-3">
        <img :src="activeCheckMark" alt="" />
        <div class="flex flex-col justify-start items-start">
          <p class="font-semibold">PickedUp</p>
          <p>Nov 9, 2020, 12:58P.M</p>
        </div>
      </div>
      <div class="w-full flex justify-start items-start gap-x-4 mt-3">
        <img :src="activeCheckMark" alt="" />
        <div class="flex flex-col justify-start items-start">
          <p class="font-semibold">Intransit</p>
          <p>Nov 9, 2020, 12:58P.M</p>
        </div>
      </div>
      <div class="w-full flex justify-start items-start gap-x-4 mt-3">
        <img :src="activeCheckMark" alt="" />
        <div class="flex flex-col justify-start items-start">
          <p class="font-semibold">Completed</p>
          <p>Nov 9, 2020, 12:58P.M</p>
        </div>
      </div>
    </div>
    <div
      class="mt-5 w-full flex flex-wrap justify-center items-center gap-4 text-white font-semibold"
    >
      <button class="w-full rounded-lg py-2 bg-secondary">
        View location on map
      </button>
      <button class="w-full rounded-lg py-2 bg-primary">Contact Rider</button>
    </div>
  </div>
</template>
