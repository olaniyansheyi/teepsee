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
      <NuxtLink to="/categories/champagne" class="rounded-xl md:w-[48%] w-full">
        <img :src="wine" alt="" />
      </NuxtLink>
      <NuxtLink to="/categories/champagne" class="rounded-xl md:w-[48%] w-full">
        <img :src="champagne" alt="" />
      </NuxtLink>
      <NuxtLink
        class="rounded-xl w-full hidden md:block"
        to="/categories/vodka"
      >
        <img :src="vodka" alt="" />
      </NuxtLink>
      <NuxtLink
        class="rounded-xl w-full md:hidden block"
        to="/categories/vodka"
      >
        <img :src="vodkaMobile" alt="" />
      </NuxtLink>
      <NuxtLink to="/categories/whiskey" class="rounded-xl md:w-[48%] w-full">
        <img :src="whiskey" alt="" />
      </NuxtLink>
      <NuxtLink class="rounded-xl md:w-[48%] w-full" to="/categories/brandy">
        <img :src="brandy" alt="" />
      </NuxtLink>
      <NuxtLink class="rounded-xl w-full hidden md:block" to="/categorise/all">
        <img :src="combo" alt="" />
      </NuxtLink>
      <NuxtLink to="/categories/all" class="rounded-xl w-full md:hidden block">
        <img :src="comboMobile" alt="" />
      </NuxtLink>
      <NuxtLink class="rounded-xl md:w-[48%] w-full" to="/categories/tequila">
        <img :src="tequila" alt="" />
      </NuxtLink>
      <NuxtLink to="/categories/cognac" class="rounded-xl md:w-[48%] w-full">
        <img :src="cognae" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>
