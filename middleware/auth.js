import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    await authStore.getCurrentUser();
  }

  const protectedRoutes = ["/dashboard"];

  if (!authStore.user && protectedRoutes.includes(to.path)) {
    return navigateTo("/login");
  }

  if (authStore.user && to.path === "/login") {
    return navigateTo("/dashboard/profile");
  }
});
