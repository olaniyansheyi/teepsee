<script setup>
import cancel from "~/assets/cancel.png";
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
</script>

<template>
  <div
    class="w-[85%] mx-auto bg-white p-4 rounded-xl absolute top-5 left-[-50%] right-[-50%] flex flex-col gap-y-2 items-start md:hidden"
  >
    <div class="w-full h-full relative">
      <img
        :src="cancel"
        class="w-[14px] absolute top-0 right-0"
        alt=""
        @click="menuStore.handleToggleSearch"
      />
    </div>
    <input
      type="text"
      class="w-full rounded-full border-[3px] py-2 px-4 mt-5"
      placeholder="Search Products"
      name=""
      id=""
    />
    <p>Search Products</p>
  </div>
</template>
