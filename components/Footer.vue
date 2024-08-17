<script setup>
import footerImgAbsolute from "~/assets/footerImgAbsolute.png";
import teepseeLogo from "~/assets/teepseeLogo.png";
</script>

<template>
  <div
    class="py-16 px-6 md:px-16 bg-secondary gap-y-5 tracking-wider text-white relative text-left"
  >
    <img
      :src="footerImgAbsolute"
      class="z-[1] absolute top-[-10%] right-0"
      alt=""
    />
    <div class="md:w-[80%] w-full">
      <h1 class="text-2xl z-[2]">
        We believe in the power of freedom.. so get teepsee.
      </h1>
      <img :src="teepseeLogo" class="my-8 w-[80px]" alt="" />
      <div class="flex flex-wrap lg:flex-nowrap gap-6">
        <div class="md:w-1/3">
          <h1 class="text-lg">LEGAL</h1>
          <div class="mt-5">
            <p class="mt-2">Private policy</p>
            <p class="mt-2">Terms & Conditiond</p>
          </div>
        </div>
        <div class="md:w-1/3">
          <h1 class="text-lg">ABOUT US</h1>
          <div class="mt-5">
            <p class="mt-2">About us</p>
            <p class="mt-2">Features</p>
          </div>
        </div>
        <div class="md:w-1/3">
          <h1 class="text-lg">SUPPORT</h1>
          <div class="mt-5">
            <p class="mt-2">F.A.Q</p>
            <p class="mt-2">Live chat</p>
            <p class="mt-2">Track</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grey-black border-[1px] border-white rounded-xl w-full flex justify-between items-center px-4 mt-16 py-4 font-light"
    >
      <p>2024. ALL RIGHTS RESERVED.</p>
      <p>Contact Us: 08176678996</p>
    </div>
  </div>
</template>
