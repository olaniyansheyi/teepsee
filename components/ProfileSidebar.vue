<script setup>
import demoPic from "~/assets/demo-pic.png";
import AddUser from "~/assets/AddUser.png";
import Bag from "~/assets/icons/Bag.svg";
import Setting from "~/assets/icons/Setting.svg";
import Logout from "~/assets/icons/Logout.svg";
import Location from "~/assets/icons/Location.svg";
import Heart from "~/assets/icons/Heart.svg";
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
          class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg pt-4"
        >
          <div class="flex items-center justify-center gap-x-6">
            <img :src="AddUser" alt="" />
            <p>Profile</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Bag" alt="" />
            <p>My Orders</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Heart" alt="" />
            <p>Favourites</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Setting" alt="" />
            <p>Settings</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Location" alt="" />
            <p>Location</p>
          </div>
          <div class="flex items-center justify-center gap-x-6">
            <img :src="Logout" alt="" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
