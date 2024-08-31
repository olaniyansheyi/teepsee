<script setup>
import teepseeHalf from "~/assets/teepseeHalf.png";
import teepseeBlack from "~/assets/teepseeBlack.png";

import { useAuthStore } from "~/stores/auth.js";

const authStore = useAuthStore();

import { useNuxtApp } from "#app";

const { $toast } = useNuxtApp();

const email = ref("");
const password = ref("");

async function handleLogin() {
  try {
    const { error } = await authStore.login({
      email: email.value,
      password: password.value,
    });

    if (error) {
      $toast.error(`${Response.error}`);
    } else {
      navigateTo("/");
      $toast.success("you are successfully logged in!");
    }
  } catch (error) {
    $toast.error(`"Login failed:", ${error.message}`);
  }

  email.value = "";
  password.value = "";
}
const passwordVisible = ref(false);

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>
<template>
  <div
    class="bg-signupImg bg-cover bg-center bg-no-repeat w-screen h-screen flex justify-center items-center px-6"
  >
    <form
      @submit.prevent="handleLogin"
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
        <h2>Login</h2>
        <MiniSpinner v-if="authStore.loading" class="w-[20px] h-[20px]" />
      </button>
      <p class="cursor-pointer">
        Don't have an account?
        <NuxtLink to="/signup" class="text-primary">Sign Up</NuxtLink>
      </p>
      <img :src="teepseeBlack" class="w-[6rem] mx-auto" alt="" />
    </form>
  </div>
</template>
