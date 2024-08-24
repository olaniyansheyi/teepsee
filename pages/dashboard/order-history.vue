<script setup>
import product1 from "~/assets/product1.png";
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="px-4 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Order History</h1>
        <div class="flex flex-col gap-y-5 items-start justify-start mt-6">
          <div
            class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
          >
            <div
              class="w-[92px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
            >
              <img :src="product1" class="w-[70%] h-[80%]" alt="" />
            </div>
            <div>
              <p>Champagne Montevideo and 4 other drinks</p>
              <h2 class="font-semibold text-sm">#50,000</h2>
              <p class="text-green-500 text-xm">Delivered</p>
            </div>
          </div>
          <p>Items in the Order</p>
          <div
            class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
          >
            <div
              class="w-[92px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
            >
              <img :src="product1" class="w-[70%] h-[80%]" alt="" />
            </div>
            <div>
              <p>Champagne Montevideo and 4 other drinks</p>
              <h2 class="font-semibold text-sm">#50,000</h2>
              <p class="text-primary text-xm">Pending</p>
            </div>
          </div>
          <div
            class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
          >
            <div
              class="w-[92px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
            >
              <img :src="product1" class="w-[70%] h-[80%]" alt="" />
            </div>
            <div>
              <p>Champagne Montevideo and 4 other drinks</p>
              <h2 class="font-semibold text-sm">#50,000</h2>
              <p class="text-primary text-xm">Pending</p>
            </div>
          </div>
          <div
            class="flex gap-x-5 justify-start items-start md:w-[65%] lg:w-[55%]"
          >
            <div
              class="w-[92px] h-[90px] rounded-lg bg-[#e6e3e3] flex justify-center items-center"
            >
              <img :src="product1" class="w-[70%] h-[80%]" alt="" />
            </div>
            <div>
              <p>Champagne Montevideo and 4 other drinks</p>
              <h2 class="font-semibold text-sm">#50,000</h2>
              <p class="text-primary text-xm">Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
