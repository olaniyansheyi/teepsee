<script setup>
import hennessey from "~/assets/hennessey.png";
import hennessey1 from "~/assets/hennessey1.png";
import hennessey2 from "~/assets/hennessey2.png";
import Heart from "~/assets/icons/Heart.svg";
</script>

<template>
  <div class="text-secondary tracking-wider my-8">
    <h1 class="font-semibold text-xl">Recently Viewed Items</h1>

    <div
      class="flex justify-center lg:items-start items-center gap-5 flex-wrap md:justify-start my-3"
    >
      <div
        class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[47%] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="max-h-[10rem]" :src="hennessey" alt="" />
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
        class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[47%] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="max-h-[10rem]" :src="hennessey1" alt="" />
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
        class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[47%] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="max-h-[10rem]" :src="hennessey2" alt="" />
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
        class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[47%] bg-white rounded-lg py-3 sm:px-8 px-2 relative"
      >
        <div
          class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
        >
          <img class="max-h-[10rem]" :src="hennessey" alt="" />
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
