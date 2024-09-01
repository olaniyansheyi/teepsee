<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

const passwordVisible = ref(false);

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>

<template>
  <div class="px-6 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <div
        class="py-12 px-6 rounded-lg bg-white w-full text-secondary tracking-wide"
      >
        <h1 class="text-2xl font-semibold">Change Password</h1>
        <div class="lg:w-[60%] w-full">
          <div>
            <label class="font-semibold block mt-5">Enter Old Password</label>
            <div class="w-full relative">
              <input
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
          <div>
            <label class="font-semibold block mt-5">Enter New Password</label>
            <div class="w-full relative">
              <input
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
          <div>
            <label class="font-semibold block mt-5">Confirm New Pasword</label>
            <div class="w-full relative">
              <input
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
          class="w-full text-center text-white bg-secondary rounded-md py-4 mt-6 md:w-[50%]"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>
