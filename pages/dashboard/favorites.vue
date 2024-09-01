<script setup>
import hennessey from "~/assets/hennessey.png";
import hennessey1 from "~/assets/hennessey1.png";
import hennessey2 from "~/assets/hennessey2.png";
import Heart from "~/assets/icons/Heart.svg";
definePageMeta({
  layout: "custom",
  middleware: "auth",
});
</script>

<template>
  <div class="px-6 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Favorites</h1>
        <div
          class="flex justify-center items-start gap-5 flex-wrap md:justify-start my-3"
        >
          <div
            class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[45%] bg-[#e6e3e3] rounded-lg py-3 px-3 relative"
          >
            <div
              class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
            >
              <img class="max-h-[5rem]" :src="hennessey" alt="" />
            </div>
            <div class="flex justify-between items-start w-full my-3 flex-col">
              <span class="flex-wrap flex justify-start items-start flex-col">
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
            class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[45%] bg-[#e6e3e3] rounded-lg py-3 px-2 relative"
          >
            <div
              class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
            >
              <img class="max-h-[5rem]" :src="hennessey1" alt="" />
            </div>
            <div class="flex justify-between items-start w-full my-3 flex-col">
              <span class="justify-start items-start flex-col">
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
            class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[45%] bg-[#e6e3e3] rounded-lg py-3 px-2 relative"
          >
            <div
              class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
            >
              <img class="max-h-[5rem]" :src="hennessey2" alt="" />
            </div>
            <div class="flex justify-between items-start w-full my-3 flex-col">
              <span class="flex-wrap flex justify-start items-start flex-col">
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
            class="text-secondary md:w-[30%] lg:w-[20%] sm:w-[40%] w-[45%] bg-[#e6e3e3] rounded-lg py-3 px-2 relative"
          >
            <div
              class="h-[70%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4"
            >
              <img class="max-h-[5rem]" :src="hennessey" alt="" />
            </div>
            <div class="flex justify-between items-start w-full my-3 flex-col">
              <span class="flex-wrap flex justify-start items-start flex-col">
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
    </div>
  </div>
</template>
