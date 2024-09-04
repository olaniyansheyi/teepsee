<script setup>
import teepseeHalf from "~/assets/teepseeHalf.png";
import teepseeBlack from "~/assets/teepseeBlack.png";

import { useAuthStore } from "~/stores/auth.js";

const authStore = useAuthStore();

import { useNuxtApp } from "#app";

const { $toast } = useNuxtApp();
const passwordVisible = ref(false);

const fullName = ref("");
const address = ref("");
const email = ref("");
const password = ref("");
const disable = ref(false);

async function handleSignUp() {
  disable.value = true;
  try {
    const response = await authStore.signup({
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      address: address.value,
    });
    if (response.error) {
      $toast.error(`${response.error}`);
    } else {
      navigateTo("/login");

      $toast.success(
        "registration successfull, PLease go ahead and login with your details!"
      );
    }
  } catch (error) {
    $toast.error(`"Sign-up failed:", ${error.message}`);
  }

  fullName.value = "";
  email.value = "";
  address.value = "";
  password.value = "";

  disable.value = false;
}

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>
<template>
  <div
    class="bg-signupImg bg-cover bg-center bg-no-repeat w-screen h-auto py-20 flex justify-center items-center px-6"
  >
    <form
      @submit.prevent="handleSignUp"
      class="bg-white rounded-lg px-6 pt-20 pb-5 flex flex-col justify-start items-start gap-y-5 text-secondary tracking-wider relative"
    >
      <img :src="teepseeHalf" class="w-[4rem] absolute top-0 left-0" alt="" />
      <div>
        <h1 class="text-xl mb-2">Sign Up</h1>
        <p>Enter your details to create an account</p>
      </div>

      <div class="w-full">
        <label class="font-semibold block my-1">Full Name</label>
        <div class="w-full relative">
          <input
            required
            v-model="fullName"
            class="px-4 py-2 rounded-md bg-[#e6e3e3] w-full mt-1 outline-none"
          />
        </div>
      </div>
      <div class="w-full">
        <label class="font-semibold block my-1">address</label>
        <div class="w-full relative">
          <input
            required
            v-model="address"
            class="px-4 py-2 rounded-md bg-[#e6e3e3] w-full mt-1 outline-none"
          />
        </div>
      </div>

      <div class="w-full">
        <label class="font-semibold block my-1">Email</label>
        <div class="w-full relative">
          <input
            type="email"
            required
            v-model="email"
            class="px-4 py-2 rounded-md bg-[#e6e3e3] w-full mt-1 outline-none"
          />
        </div>
      </div>

      <div class="w-full">
        <label class="font-semibold block my-1">Password</label>
        <div class="w-full relative">
          <div class="w-full relative">
            <input
              required
              v-model="password"
              class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
              :type="passwordVisible ? 'text' : 'password'"
            />
            <button
              class="absolute right-0 pr-4 flex items-start font-semibold focus:outline-none top-1/2 -translate-y-1/2"
              :class="passwordVisible ? '' : 'text-primary'"
              @click="togglePasswordVisibility"
            >
              {{ passwordVisible ? "Hide" : "Show" }}
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="w-full text-center text-white bg-secondary rounded-md py-2 mt-2 flex justify-center items-center gap-x-8"
      >
        <h2>{{ authStore.loading ? "Signing in..." : "Sign Up" }}</h2>
      </button>
      <p class="cursor-pointer">
        Already have an account?
        <NuxtLink to="/login" class="text-primary">Login</NuxtLink>
      </p>
      <img :src="teepseeBlack" class="w-[6rem] mx-auto" alt="" />
    </form>
  </div>
</template>
