<script setup>
import demoPic from "~/assets/demo-pic.png";
import AddUser from "~/assets/AddUser.png";
import Bag from "~/assets/icons/Bag.svg";
import Setting from "~/assets/icons/Setting.svg";
import Logout from "~/assets/icons/Logout.svg";
import Heart from "~/assets/icons/Heart.svg";
import { useAuthStore } from "~/stores/auth.js";
import unknownUser from "~/assets/unknownUser.png";

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

onMounted(async () => {
  await authStore.getAvatarUrl();
});

function handleGoToRoute(route) {
  navigateTo(route);
}

const avatar_url = computed(() => authStore.avatar_url);
</script>

<template>
  <div class="bg-white rounded-xl hidden sm:block w-[340px]">
    <div class="w-full h-full my-8">
      <div class="px-8">
        <div class="flex gap-x-5 justify-start items-center">
          <div>
            <img
              :src="avatar_url || unknownUser"
              class="w-[80px] rounded-full"
              alt=""
            />
          </div>
          <div>
            <h1 class="text-xl">
              {{ authStore.user?.user_metadata?.fullName }}
            </h1>
            <p class="text-sm text-primary">Teepseer</p>
          </div>
        </div>

        <div
          class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg cursor-pointer my-5"
        >
          <div class="flex items-center justify-center gap-x-6">
            <img :src="AddUser" alt="" />
            <p @click="handleGoToProfile" class="cursor-pointer">Profile</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Bag" alt="" />
            <p @click="handleGoToRoute('/track-order')">Track Orders</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Heart" alt="" />
            <p @click="handleGoToRoute('/dashboard/favorites')">Favourites</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Heart" alt="" />
            <p @click="handleGoToRoute('/faq')">F.A.Q</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Bag" alt="" />
            <p @click="handleGoToRoute('/dashboard/order-history')">
              My Orders
            </p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Setting" alt="" />
            <p @click="handleGoToRoute('/dashboard/setting/change-password')">
              Settings
            </p>
          </div>

          <div
            v-if="authStore.user"
            @click="handleLogout"
            class="flex items-center justify-center gap-x-6"
          >
            <img :src="Logout" alt="" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
