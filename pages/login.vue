<script setup>
import teepseeHalf from "~/assets/teepseeHalf.png";
import teepseeBlack from "~/assets/teepseeBlack.png";
</script>
<template>
  <div
    class="bg-signupImg bg-cover bg-center bg-no-repeat w-screen h-screen flex justify-center items-center px-6"
  >
    <div
      class="bg-white rounded-lg px-6 pt-20 pb-5 flex flex-col justify-start items-start gap-y-5 text-secondary tracking-wider relative"
    >
      <img :src="teepseeHalf" class="w-[4rem] absolute top-0 left-0" alt="" />
      <div>
        <h1 class="text-xl mb-2">Login</h1>
        <p>Enter your details to log in your account</p>
      </div>

      <div class="w-full">
        <label class="font-semibold block my-1">Email</label>
        <div class="w-full relative">
          <input
            class="px-4 py-2 rounded-md bg-[#e6e3e3] w-full mt-1 outline-none"
          />
        </div>
      </div>

      <div class="w-full">
        <label class="font-semibold block my-1">Password</label>
        <div class="w-full relative">
          <input
            class="px-4 py-2 rounded-md bg-[#e6e3e3] w-full mt-1 outline-none"
          />
        </div>
      </div>
      <p class="text-primary cursor-pointer mt-[-1rem]">Forgot Password?</p>
      <button
        class="w-full text-center text-white bg-secondary rounded-md py-2 mt-2"
      >
        Login
      </button>
      <p class="cursor-pointer">
        Don't have an account? <span class="text-primary">Sign Up</span>
      </p>
      <img :src="teepseeBlack" class="w-[6rem] mx-auto" alt="" />
    </div>
  </div>
</template>
