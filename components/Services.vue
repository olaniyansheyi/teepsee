<script setup>
import explore from "~/assets/explore.png";
import checkout from "~/assets/checkout.png";
import teepsee from "~/assets/teepsee.png";
</script>

<template>
  <div
    class="flex flex-col gap-y-16 justify-center text-center items-center my-14 text-secondary px-8 sm:px-16"
  >
    <h1 class="font-semibold text-3xl">How To get Teepsee</h1>
    <div
      class="flex gap-5 justify-center items-center lg:flex-nowrap flex-wrap"
    >
      <div
        class="bg-white rounded-xl py-10 w-[320px] sm:w-[46%] h-[340px] flex justify-center items-center"
      >
        <div
          class="justify-center items-center text-center flex flex-col gap-y-4 max-w-[80%] mx-auto"
        >
          <img class="w-[126px]" :src="explore" alt="" />
          <h1 class="font-semibold text-xl">Explore Your Taste</h1>
          <p>HIT THE GET started icon to surf through various liquor options</p>
        </div>
      </div>
      <div
        class="bg-white w-[320px] sm:w-[46%] h-[340px] flex justify-center items-center rounded-xl py-10"
      >
        <div
          class="justify-center items-center text-center flex flex-col gap-y-4 max-w-[80%] mx-auto"
        >
          <img class="w-[126px]" :src="checkout" alt="" />
          <h1 class="font-semibold text-xl">Checkout</h1>
          <p>Add to cart, check out and make payment</p>
        </div>
      </div>
      <div
        class="bg-white w-[320px] sm:w-[46%] h-[340px] flex justify-center items-center rounded-xl py-10"
      >
        <div
          class="justify-center items-center text-center flex flex-col gap-y-4 max-w-[80%] mx-auto"
        >
          <img class="w-[126px]" :src="teepsee" alt="" />
          <h1 class="font-semibold text-xl">Get Teepsee</h1>
          <p>Relax sit back and GET TEEPSEE</p>
        </div>
      </div>
    </div>
  </div>
</template>
