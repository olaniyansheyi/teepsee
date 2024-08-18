<script setup>
import { useMenuStore } from "~/stores/menu";
import cancel from "~/assets/cancel.png";
import unknownUser from "~/assets/unknownUser.png";
import AddUser from "~/assets/AddUser.png";
import Bag from "~/assets/icons/Bag.svg";
import Heart from "~/assets/icons/Heart.svg";

const menuStore = useMenuStore();
</script>

<template>
  <div class="fixed inset-0 z-50">
    <div
      class="z-10 fixed inset-0 bg-black bg-opacity-50"
      @click="menuStore.handleToggleMenu"
    ></div>
    <div class="w-[280px] bg-white h-full z-20 absolute left-0 overflow-y-auto">
      <div class="w-full h-full relative">
        <img
          :src="cancel"
          class="w-[18px] absolute top-8 right-5"
          alt=""
          @click="menuStore.handleToggleMenu"
        />
        <div class="pt-20 px-6 space-y-9">
          <img :src="unknownUser" class="w-[80px]" alt="" />
          <div
            class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg"
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
          </div>

          <div class="flex flex-col items-start gap-y-4 text-white">
            <button class="bg-secondary rounded-lg py-3 w-[9rem]">Login</button>
            <button class="bg-primary rounded-lg py-3 w-[9rem]">Sign Up</button>
          </div>

          <div class="flex flex-col items-start gap-y-5 tracking-wider">
            <button
              class="py-4 text-left border-[#999999] border-b-[1px] text-primary text-lg w-full"
            >
              OUR CATEGORIES
            </button>

            <div
              class="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg mb-10"
            >
              <p>General</p>
              <p>Champagne</p>
              <p>Herb</p>
              <p>Gin</p>
              <p>Brandy</p>
              <p>Wine</p>
              <p>Cognac</p>
              <p>Whiskey</p>
              <p>Vodka</p>
              <p>Tequila</p>
              <p>Combo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
