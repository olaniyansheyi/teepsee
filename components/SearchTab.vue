<script setup>
import cancel from "~/assets/cancel.png";
import { useMenuStore } from "~/stores/menu";
import { useProductsStore } from "~/stores/product";

const productStore = useProductsStore();

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
    <form
      @submit.prevent="
        () => {
          navigateTo('/search-result');
          menuStore.handleToggleSearch();
          productStore.clearSearchQuery();
        }
      "
    >
      <input
        type="text"
        class="w-full rounded-full border-[3px] py-2 px-4 mt-5"
        placeholder="Search Products"
        v-model="productStore.searchQuery"
      />
    </form>
    <p class="text-secondary text-sm">Search Products By name or category</p>
  </div>
</template>
