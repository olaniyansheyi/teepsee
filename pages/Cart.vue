<script setup>
import hennessey2 from "~/assets/hennessey2.png";
import hennessey from "~/assets/hennessey.png";
import hennessey1 from "~/assets/hennessey1.png";
import cancel from "~/assets/cancel.png";
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="mb-10 px-4 sm:px-8 text-secondary tracking-wider">
    <h1 class="my-5 text-2xl">Cart</h1>
    <div class="flex flex-wrap justify-center items-start w-full gap-5 mb-5">
      <!-- for tablet and desktop -->
      <div
        class="rounded-xl bg-white sm:w-full lg:w-[60%] px-4 sm:block hidden flex-col gap-y-4 pb-8"
      >
        <div
          class="flex justify-between items-start w-full py-5 border-b-2 border-b-[#e6e3e3] text-md"
        >
          <h1>Product Image & Item Name</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Sub-total</h1>
          <h1>Remove</h1>
        </div>
        <div
          class="flex justify-between items-center w-full mt-5 border-b-2 border-b-[#e6e3e3]"
        >
          <div class="flex gap-x-4 pb-5">
            <div
              class="bg-[#e6e3e3] flex justify-center items-center h-[80px] w-[90px] rounded-lg"
            >
              <img :src="hennessey2" alt="" class="w-[80%] h-[90%]" />
            </div>
            <div class="flex flex-col justify-center items-start font-semibold">
              <p>Hennessey</p>
              <p>Cognac</p>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold">#5,000</h2>
          </div>
          <div>
            <h2 class="text-xl font-semibold">2</h2>
          </div>
          <div>
            <h2 class="text-xl font-semibold">#5,000</h2>
          </div>
          <div>
            <img class="w-[1rem] me-4" :src="cancel" alt="" />
          </div>
        </div>
        <div
          class="flex justify-between items-center w-full mt-5 border-b-2 border-b-[#e6e3e3]"
        >
          <div class="flex gap-x-4 pb-5">
            <div
              class="bg-[#e6e3e3] flex justify-center items-center h-[80px] w-[90px] rounded-lg"
            >
              <img :src="hennessey1" alt="" class="w-[80%] h-[90%]" />
            </div>
            <div class="flex flex-col justify-center items-start font-semibold">
              <p>Hennessey</p>
              <p>Cognac</p>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold">#5,000</h2>
          </div>
          <div>
            <h2 class="text-xl font-semibold">2</h2>
          </div>
          <div>
            <h2 class="text-xl font-semibold">#5,000</h2>
          </div>
          <div>
            <img class="w-[1rem] me-4" :src="cancel" alt="" />
          </div>
        </div>
        <div
          class="flex justify-between items-center w-full mt-5 border-b-2 border-b-[#e6e3e3]"
        >
          <div class="flex gap-x-4 pb-5">
            <div
              class="bg-[#e6e3e3] flex justify-center items-center h-[80px] w-[90px] rounded-lg"
            >
              <img :src="hennessey" alt="" class="w-[80%] h-[90%]" />
            </div>
            <div class="flex flex-col justify-center items-start font-semibold">
              <p>Hennessey</p>
              <p>Cognac</p>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold">#5,000</h2>
          </div>
          <div>
            <h2 class="text-xl font-semibold">2</h2>
          </div>
          <div>
            <h2 class="text-xl font-semibold">#5,000</h2>
          </div>
          <div>
            <img class="w-[1rem] me-4" :src="cancel" alt="" />
          </div>
        </div>
      </div>

      <!-- for mobile only -->
      <div
        class="sm:hidden bg-white rounded-xl p-6 flex flex-col gap-y-5 w-full"
      >
        <div class="flex gap-x-4 pb-5 w-full border-b-2 border-b-[#e6e3e3]">
          <div
            class="bg-[#e6e3e3] flex justify-center items-center h-[120px] w-[40%] rounded-lg"
          >
            <img :src="hennessey2" alt="" class="w-[80%] h-[90%]" />
          </div>

          <div
            class="flex flex-col justify-start items-start font-semibold w-full"
          >
            <h1>Champagne Montevideo</h1>
            <p class="text-md font-semibold">#5,000</p>
            <p>Qty: 0</p>
            <div class="mt-3">
              <button
                class="ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
              >
                -
              </button>
              <button
                class="ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-x-4 pb-5 w-full border-b-2 border-b-[#e6e3e3]">
          <div
            class="bg-[#e6e3e3] flex justify-center items-center h-[120px] w-[40%] rounded-lg"
          >
            <img :src="hennessey" alt="" class="w-[80%] h-[90%]" />
          </div>

          <div
            class="flex flex-col justify-start items-start font-semibold w-full"
          >
            <h1>Champagne Montevideo</h1>
            <p class="text-md font-semibold">#5,000</p>
            <p>Qty: 0</p>
            <div class="mt-3">
              <button
                class="ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
              >
                -
              </button>
              <button
                class="ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-x-4 pb-5 w-full border-b-2 border-b-[#e6e3e3]">
          <div
            class="bg-[#e6e3e3] flex justify-center items-center h-[120px] w-[40%] rounded-lg"
          >
            <img :src="hennessey1" alt="" class="w-[80%] h-[90%]" />
          </div>

          <div
            class="flex flex-col justify-start items-start font-semibold w-full"
          >
            <h1>Champagne Montevideo</h1>
            <p class="text-md font-semibold">#5,000</p>
            <p>Qty: 0</p>
            <div class="mt-3">
              <button
                class="ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
              >
                -
              </button>
              <button
                class="ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white rounded-xl lg:w-[33%] md:w-full w-full flex flex-col gap-y-5 text-left text-secondary p-6"
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
    <RecentProductList />
  </div>
</template>
