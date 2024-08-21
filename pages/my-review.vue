<script setup>
import starActive from "~/assets/starActive.png";
import starGray from "~/assets/starGray.png";
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div
    class="py-8 px-6 flex flex-col gap-y-4 justify-center items-start w-full rounded-xl bg-white text-secondary tracking-wider"
  >
    <h1 class="text-xl font-semibold">Reviews</h1>
    <div
      class="flex flex-col items-start justify-center gap-y-4 py-4 border-b-2 border-b-[#e6e3e3] w-full"
    >
      <div class="flex gap-x-1 items-center justify-center">
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starGray" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper sit
        facilisi turpis nullam orci id at. In massa, quam ac felis mattis
        vulputate et luctus. Et nam mus dui laoreet senectus pulvinar et quam
        ipsum elit erat id libero.
      </p>
      <p>
        <span>24/07/2021,</span>
        <span> 10:37p.m</span>
        <span class="text-md font-semibold"> by Anayo Obiajulu</span>
      </p>
    </div>
    <div
      class="flex flex-col items-start justify-center gap-y-4 py-4 border-b-2 border-b-[#e6e3e3] w-full"
    >
      <div class="flex gap-x-1 items-center justify-center">
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starGray" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper sit
        facilisi turpis nullam orci id at. In massa, quam ac felis mattis
        vulputate et luctus. Et nam mus dui laoreet senectus pulvinar et quam
        ipsum elit erat id libero.
      </p>
      <p>
        <span>24/07/2021,</span>
        <span> 10:37p.m</span>
        <span class="text-md font-semibold"> by Anayo Obiajulu</span>
      </p>
    </div>
    <div
      class="flex flex-col items-start justify-center gap-y-4 py-4 border-b-2 border-b-[#e6e3e3] w-full"
    >
      <div class="flex gap-x-1 items-center justify-center">
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starActive" alt="" />
        <img :src="starGray" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper sit
        facilisi turpis nullam orci id at. In massa, quam ac felis mattis
        vulputate et luctus. Et nam mus dui laoreet senectus pulvinar et quam
        ipsum elit erat id libero.
      </p>
      <p>
        <span>24/07/2021,</span>
        <span> 10:37p.m</span>
        <span class="text-md font-semibold"> by Anayo Obiajulu</span>
      </p>
    </div>
  </div>
  <RecentProductList />
</template>
