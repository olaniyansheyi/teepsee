<script setup></script>

<template>
  <div
    class="py-4 px-6 md:px-10 h-[370px] bg-trackOrderImg bg-cover bg-center bg-no-repeat relative"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="absolute z-20 md:w-[60%] w-[94%] top-[70%] mx-auto bg-white rounded-xl text-secondary tracking-wider p-4 flex justify-start items-start text-left gap-y-2 left-1/2 transform -translate-x-1/2 flex-col sm:justify-center sm:text-center"
    >
      <h1 class="text-lg font-semibold mx-auto">Enter Tracking Number</h1>
      <p class="mx-auto">
        Please provide your tracking number to know the status of your package
      </p>
      <div class="sm:w-full flex justify-center items-center my-3">
        <input
          type="text"
          placeholder="Enter tracking code"
          class="outline-none py-4 sm:px-5 px-3 rounded-s-lg bg-[#e6e3e3]"
          name=""
          id=""
        />
        <button
          class="whitespace-nowrap py-4 px-4 sm:px-6 text-md font-semibold rounded-e-lg bg-secondary text-white"
        >
          Track order
        </button>
      </div>
    </div>
    <div class="relative">
      <HeroHeader />
    </div>
  </div>
  <div class="my-40"></div>
  <Footer />
</template>
