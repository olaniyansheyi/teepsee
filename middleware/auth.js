import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  if (!authStore.user && to.path !== "/login") {
    return navigateTo("/login");
  }
});
