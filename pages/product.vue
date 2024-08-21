<script setup>
import product1 from "~/assets/product1.png";

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="mt-20 mb-10 px-4 sm:px-8">
    <div
      class="w-full flex text-secondary gap-5 justify-center items-center flex-wrap"
    >
      <div
        class="bg-white flex justify-center items-center rounded-lg sm:h-[500px] h-[350px] w-full md:w-[48%]"
      >
        <img :src="product1" alt="" class="w-[60%]" />
      </div>

      <div
        class="bg-white rounded-lg sm:h-[500px] w-full md:w-[48%] p-10 text-left text-secondary tracking-wider flex items-start justify-start gap-y-1 flex-col"
      >
        <div class="w-full flex justify-between items-center">
          <h1 class="text-xl font-semibold">Brandy</h1>
          <p class="gray-white-text">200 Ratings</p>
        </div>
        <h2 class="text-2xl font-semibold">#5,000</h2>
        <p class="text-xs gray-white-text">Quantity</p>
        <div class="mt-3">
          <button
            class="py-[2px] ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
          >
            -
          </button>
          <button
            class="py-[2px] ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
          >
            +
          </button>
        </div>
        <h1 class="text-md font-semibold mt-1">Product description</h1>
        <p class="text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
          tincidunt penatibus massa nulla. Imperdiet a magna.
        </p>
        <div
          class="mt-3 flex flex-wrap w-full gap-2 justify-center items-center text-white"
        >
          <button class="rounded-lg py-2 w-full sm:w-[48%] bg-secondary">
            Add to cart
          </button>

          <button class="rounded-lg py-2 w-full sm:w-[48%] bg-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <RecentProductList />
  </div>
</template>
