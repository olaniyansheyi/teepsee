<script setup>
import unknownUser from "~/assets/unknownUser.png";
import AddUser from "~/assets/AddUser.png";
import Bag from "~/assets/icons/Bag.svg";
import Heart from "~/assets/icons/Heart.svg";
import hennessey from "~/assets/hennessey.png";
import hennessey1 from "~/assets/hennessey1.png";
import hennessey2 from "~/assets/hennessey2.png";

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="mx-5 my-8 flex justify-start items-start gap-5">
    <div class="w-[280px] bg-white h-full rounded-lg md:block hidden">
      <div class="w-full h-full">
        <div class="pt-5 px-6 space-y-9">
          <img :src="unknownUser" class="w-[80px]" alt="" />
          <div
            class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg"
          >
            <div class="flex items-center justify-center gap-x-6">
              <img :src="AddUser" alt="" />
              <p>Profile</p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Bag" alt="" />
              <p>My Orders</p>
            </div>
            <div class="flex items-center justify-center gap-x-6">
              <img :src="Heart" alt="" />
              <p>Favourites</p>
            </div>
          </div>

          <div class="flex flex-col items-start gap-y-4 text-white">
            <button class="bg-secondary rounded-lg py-3 w-[9rem]">Login</button>
            <button class="bg-primary rounded-lg py-3 w-[9rem]">Sign Up</button>
          </div>

          <div class="flex flex-col items-start gap-y-5 tracking-wider">
            <button
              class="py-4 text-left border-[#999999] border-b-[1px] text-primary text-lg w-full"
            >
              OUR CATEGORIES
            </button>

            <div
              class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg mb-10"
            >
              <p>General</p>
              <p>Champagne</p>
              <p>Herb</p>
              <p>Gin</p>
              <p>Brandy</p>
              <p>Wine</p>
              <p>Cognac</p>
              <p>Whiskey</p>
              <p>Vodka</p>
              <p>Tequila</p>
              <p>Combo</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center lg:items-start items-center gap-5 flex-wrap md:justify-start my-3"
    >
      <div
        class="text-secondary w-[300px] h-[344px] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="h-[10rem]" :src="hennessey" alt="" />
        </div>
        <div class="flex justify-between items-start w-full my-3">
          <span class="flex justify-start items-start flex-col">
            <h1 class="text-md font-semibold">Hennessy</h1>
            <p class="text-[#666666]">Cognac</p>
          </span>
          <h2 class="font-semibold text-md">#5,000</h2>
        </div>
        <div class="w-[25px] absolute top-3 right-4">
          <img :src="Heart" alt="" />
        </div>
      </div>
      <div
        class="text-secondary w-[300px] h-[344px] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="h-[10rem]" :src="hennessey1" alt="" />
        </div>
        <div class="flex justify-between items-start w-full my-3">
          <span class="flex justify-start items-start flex-col">
            <h1 class="text-md font-semibold">Hennessy</h1>
            <p class="text-[#666666]">Cognac</p>
          </span>
          <h2 class="font-semibold text-md">#5,000</h2>
        </div>
        <div class="w-[25px] absolute top-3 right-4">
          <img :src="Heart" alt="" />
        </div>
      </div>
      <div
        class="text-secondary w-[300px] h-[344px] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="h-[10rem]" :src="hennessey2" alt="" />
        </div>
        <div class="flex justify-between items-start w-full my-3">
          <span class="flex justify-start items-start flex-col">
            <h1 class="text-md font-semibold">Hennessy</h1>
            <p class="text-[#666666]">Cognac</p>
          </span>
          <h2 class="font-semibold text-md">#5,000</h2>
        </div>
        <div class="w-[25px] absolute top-3 right-4">
          <img :src="Heart" alt="" />
        </div>
      </div>
      <div
        class="text-secondary w-[300px] h-[344px] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="h-[10rem]" :src="hennessey" alt="" />
        </div>
        <div class="flex justify-between items-start w-full my-3">
          <span class="flex justify-start items-start flex-col">
            <h1 class="text-md font-semibold">Hennessy</h1>
            <p class="text-[#666666]">Cognac</p>
          </span>
          <h2 class="font-semibold text-md">#5,000</h2>
        </div>
        <div class="w-[25px] absolute top-3 right-4">
          <img :src="Heart" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
