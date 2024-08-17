<script setup>
import wine from "~/assets/wine.png";
import champagne from "~/assets/champagne.png";
import vodka from "~/assets/vodka.png";
import whiskey from "~/assets/whiskey.png";
import combo from "~/assets/combo.png";
import tequila from "~/assets/tequila.png";
import cognae from "~/assets/cognae.png";
import brandy from "~/assets/brandy.png";
import vodkaMobile from "~/assets/vodka-mobile.png";
import comboMobile from "~/assets/combo-mobile.png";
</script>

<template>
  <div class="text-left flex flex-col gap-y-10 my-10 tracking-wider mx-5">
    <h1 class="text-secondary text-2xl font-semibold">Shop Now</h1>
    <div class="flex flex-wrap gap-5 my-5 justify-center items-center">
      <img class="rounded-xl md:w-[48%] w-full" :src="wine" alt="" />
      <img class="rounded-xl md:w-[48%] w-full" :src="champagne" alt="" />
      <img class="rounded-xl w-full hidden md:block" :src="vodka" alt="" />
      <img
        class="rounded-xl w-full md:hidden block"
        :src="vodkaMobile"
        alt=""
      />
      <img class="rounded-xl md:w-[48%] w-full" :src="whiskey" alt="" />
      <img class="rounded-xl md:w-[48%] w-full" :src="brandy" alt="" />
      <img class="rounded-xl w-full hidden md:block" :src="combo" alt="" />
      <img
        class="rounded-xl w-full md:hidden block"
        :src="comboMobile"
        alt=""
      />
      <img class="rounded-xl md:w-[48%] w-full" :src="tequila" alt="" />
      <img class="rounded-xl md:w-[48%] w-full" :src="cognae" alt="" />
    </div>
  </div>
</template>
