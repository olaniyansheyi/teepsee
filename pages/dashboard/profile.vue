<script setup>
import { useAuthStore } from "~/stores/auth.js";

const authStore = useAuthStore();

definePageMeta({
  layout: "custom",
});

onMounted(async () => {
  if (authStore.user === null) await authStore.getCurrentUser();
});
</script>

<template>
  <div v-if="authStore.user" class="px-6 mt-5 mb-10 space-y-6 text-secondary">
    <h1 class="text-left text-2xl font-semibold">My Account</h1>
    <div class="flex justify-start items-start gap-x-5 w-full">
      <ProfileSidebar />
      <EditProfile />
    </div>
  </div>
</template>
