<script setup>
import demoPic from "~/assets/demo-pic.png";
import edit from "~/assets/edit.png";
</script>

<template>
  <div
    class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
  >
    <h1 class="text-2xl font-semibold">Profile</h1>
    <div class="mt-5 relative w-[80px]">
      <img :src="demoPic" class="w-[80px]" alt="" />
      <img
        class="w-[25px] absolute bottom-2 right-[-8%] cursor-pointer"
        :src="edit"
        alt=""
      />
    </div>
    <form class="flex flex-wrap w-full justify-start items-center gap-x-5">
      <div class="sm:w-[45%] w-full">
        <div>
          <label class="font-semibold block mt-5">First Name</label>
          <input
            type="text"
            placeholder="Obalola"
            class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
          />
        </div>
        <div>
          <label class="font-semibold block mt-5">Email</label>
          <input
            class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
            type="text"
            placeholder="Obalola@gmail.com"
          />
        </div>
      </div>
      <div class="sm:w-[45%] w-full">
        <div>
          <label class="font-semibold block mt-5">LastName</label>
          <input
            class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
            type="text"
            placeholder="anayo"
          />
        </div>
        <div>
          <label class="font-semibold block mt-5">Phone Number</label>
          <input
            class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
            type="text"
            placeholder="+2348135158754"
          />
        </div>
      </div>
    </form>
    <button
      class="w-full text-center text-white bg-secondary rounded-md py-4 mt-6 md:w-[50%]"
    >
      Edit Profile
    </button>
  </div>
</template>
