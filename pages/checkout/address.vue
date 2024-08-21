<script setup>
import starActive from "~/assets/starActive.png";
import starGray from "~/assets/starGray.png";
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div
    class="mb-10 text-secondary tracking-wider flex flex-wrap justify-center items-center gap-5 px-6"
  >
    <div
      class="rounded-xl bg-white space-y-6 px-6 text-left pb-10 md:w-[47%] w-full"
    >
      <h1 class="text-xl font-semibold mt-10">Use Address on my Profile</h1>
      <span
        class="flex justify-start text-left items-start gap-x-4 font-semibold mt-3"
      >
        <input type="radio" name="" id="" class="border-4" />
        <p>15, Abate way Victoria Island Lagos</p>
      </span>
      <form class="space-y-6">
        <div>
          <label>Enter Address*</label>
          <input
            type="text"
            class="block bg-[#e6e3e3] text-secondary py-2 mt-1 outline-none rounded-lg w-full"
          />
        </div>
        <div>
          <label>Landmark*</label>
          <input
            type="text"
            class="block bg-[#e6e3e3] text-secondary py-2 mt-1 outline-none rounded-lg w-full"
          />
        </div>
        <div>
          <label>Phone Number*</label>
          <input
            type="text"
            class="block bg-[#e6e3e3] text-secondary py-2 mt-1 outline-none rounded-lg w-full"
          />
        </div>
      </form>
    </div>

    <div
      class="bg-white rounded-xl md:w-[47%] w-full flex flex-col gap-y-5 text-left text-secondary p-6"
    >
      <h1 class="text-2xl">Summary</h1>
      <div class="border-y-2 border-y-[#e6e3e3]">
        <div
          class="pt-4 pb-7 flex flex-col justify-center items-center gap-y-4"
        >
          <span class="flex items-center justify-between w-full">
            <p>Subtotal</p>
            <p class="font-semibold text-md">#15,456.00</p>
          </span>
          <span class="flex items-center justify-between w-full">
            <p>Delivery Fee</p>
            <p class="font-semibold text-md">#15,456.00</p>
          </span>
          <span class="flex items-center justify-between w-full">
            <p class="font-semibold">Total</p>
            <p class="font-semibold text-md">#15,456.00</p>
          </span>
        </div>
      </div>
      <div
        class="w-[80%] flex justify-center sm:justify-start items-center mt-3 mx-auto sm:mx-0"
      >
        <input
          type="text"
          placeholder="Your discount code"
          class="outline-none py-2 px-5 rounded-s-lg border-[#e6e3e3] border-2 border-e-0"
          name=""
          id=""
        />
        <button
          class="p-[10px] px-6 text-md font-semibold rounded-e-lg bg-primary text-secondary"
        >
          APPLY
        </button>
      </div>
      <button
        class="sm:w-[80%] w-full mx-auto text-center bg-secondary text-white font-semibold rounded-lg py-2 mt-8 sm:mx-0"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
