import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    await authStore.getCurrentUser();
  }

  if (!authStore.user && to.path !== "/login") {
    console.log(authStore.user);
    return navigateTo("/login");
  }
});
