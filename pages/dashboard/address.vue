<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="px-6 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Address</h1>

        <div class="lg:w-[60%] w-full">
          <div>
            <label class="font-semibold block mt-5">Enter Address*</label>
            <div class="w-full relative">
              <input
                class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
              />
            </div>
          </div>
          <div>
            <label class="font-semibold block mt-5">Landmark*</label>
            <div class="w-full relative">
              <input
                class="px-4 py-2 rounded-lg bg-[#e6e3e3] w-full mt-1 outline-none"
              />
            </div>
          </div>
        </div>
        <button
          class="w-full text-center text-white bg-secondary rounded-md py-4 mt-6 md:w-[50%]"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
