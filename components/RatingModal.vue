<script setup>
import cancel from "~/assets/cancel.png";
import hennessey2 from "~/assets/hennessey2.png";
import starActive from "~/assets/starActive.png";
import starGray from "~/assets/starGray.png";

import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
</script>

<template>
  <div class="z-10 fixed inset-0 bg-black bg-opacity-50"></div>
  <div
    class="md:w-[400px] w-[85%] h-auto rounded-xl bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 px-6 py-10 flex flex-col gap-y-2 text-secondary justify-center items-center"
  >
    <div class="relative w-full h-full">
      <img
        :src="cancel"
        class="absolute top-0 right-0 w-[20px]"
        alt=""
        @click="menuStore.handleToggleShowRatingModal"
      />
    </div>
    <h1 class="font-semibold text-2xl">Hello Anayo</h1>
    <p>Please rate your drink</p>
    <div
      class="w-[90px] mt-1 h-[90px] bg-[#e6e3e3] rounded-full flex justify-center items-center"
    >
      <img :src="hennessey2" class="w-[70px] h-[70px]" alt="" />
    </div>
    <div class="flex gap-x-2 items-center justify-center mt-1">
      <img :src="starActive" alt="" />
      <img :src="starActive" alt="" />
      <img :src="starActive" alt="" />
      <img :src="starActive" alt="" />
      <img :src="starGray" alt="" />
    </div>
    <form>
      <textarea
        cols="30"
        rows="10"
        class="w-full mt-3 mx-auto rounded-lg p-3 h-[150px] border-2 border-[#e6e3e3] outline-none"
        placeholder="Drop a comment(optional)"
      ></textarea>
      <button
        type="submit"
        class="mt-4 rounded-lg w-full py-2 bg-secondary font-semibold text-white"
      >
        Submit
      </button>
    </form>
  </div>
</template>
