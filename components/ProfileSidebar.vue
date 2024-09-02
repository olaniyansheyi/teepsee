<script setup>
import demoPic from "~/assets/demo-pic.png";
import AddUser from "~/assets/AddUser.png";
import Bag from "~/assets/icons/Bag.svg";
import Setting from "~/assets/icons/Setting.svg";
import Logout from "~/assets/icons/Logout.svg";
import Location from "~/assets/icons/Location.svg";
import Heart from "~/assets/icons/Heart.svg";
import { useAuthStore } from "~/stores/auth.js";

const authStore = useAuthStore();

function handleGoToProfile() {
  if (authStore.user) {
    navigateTo("/dashboard/profile");
  } else {
    navigateTo("/login");
  }

  menuStore.handleToggleMenu();
}

async function handleLogout() {
  await authStore.logout();

  if (!authStore.user) $toast.success("You successfully logged out!");
}
</script>

<template>
  <div class="bg-white rounded-xl hidden sm:block w-[340px]">
    <div class="w-full h-full my-8">
      <div class="px-8">
        <div class="flex gap-x-5 justify-start items-center">
          <div>
            <img :src="demoPic" class="w-[80px]" alt="" />
          </div>
          <div>
            <h1 class="text-xl">Obiajulu Anayo</h1>
            <p class="text-sm text-primary">Teepseer</p>
          </div>
        </div>

        <div
          class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg pt-4 cursor-pointer"
        >
          <div class="flex items-center justify-center gap-x-6">
            <img :src="AddUser" alt="" />
            <p @click="handleGoToProfile">Profile</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Bag" alt="" />
            <NuxtLink to="/dashboard/order-history">My Orders</NuxtLink>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Heart" alt="" />
            <NuxtLink to="/dashboard/favorites">Favourites</NuxtLink>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Setting" alt="" />
            <NuxtLink to="/dashboard/setting/change-password"
              >Settings</NuxtLink
            >
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Location" alt="" />
            <NuxtLink to="/dashboard/address">Location</NuxtLink>
          </div>
          <div
            @click="authStore.Logout"
            class="flex items-center justify-center gap-x-6"
          >
            <img :src="Logout" alt="" />
            <p>Logout</p>
            <MiniSpinner
              class="w-[16px] ms-[-15px] pt-2"
              v-if="authStore.loading"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
