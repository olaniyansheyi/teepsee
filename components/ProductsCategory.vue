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
    <div
      class="mx-auto flex flex-wrap gap-5 my-5 justify-center items-center lg:px-20"
    >
      <NuxtLink
        to="/categories/champagne"
        class="rounded-xl md:w-[48%] lg:w-[48%] w-full"
      >
        <img :src="wine" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink
        to="/categories/champagne"
        class="rounded-xl md:w-[48%] lg:w-[48%] w-full"
      >
        <img :src="champagne" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink
        class="rounded-xl w-full hidden md:block"
        to="/categories/vodka"
      >
        <img :src="vodka" alt="" class="lg:w-[98%] mx-auto" />
      </NuxtLink>
      <NuxtLink
        class="rounded-xl w-full md:hidden block"
        to="/categories/vodka"
      >
        <img :src="vodkaMobile" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink
        to="/categories/whiskey"
        class="rounded-xl md:w-[48%] lg:w-[48%] w-full"
      >
        <img :src="whiskey" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink
        class="rounded-xl md:w-[48%] lg:w-[48%] w-full"
        to="/categories/brandy"
      >
        <img :src="brandy" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink class="rounded-xl w-full hidden md:block" to="/categorise/all">
        <img :src="combo" alt="" class="lg:w-[98%] mx-auto rounded-lg" />
      </NuxtLink>
      <NuxtLink to="/categories/all" class="rounded-xl w-full md:hidden block">
        <img :src="comboMobile" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink
        class="rounded-xl md:w-[48%] lg:w-[48%] w-full"
        to="/categories/tequila"
      >
        <img :src="tequila" class="w-full" alt="" />
      </NuxtLink>
      <NuxtLink
        to="/categories/cognac"
        class="rounded-xl md:w-[48%] lg:w-[48%] w-full"
      >
        <img :src="cognae" class="w-full" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>
