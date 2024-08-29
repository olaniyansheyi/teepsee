import { useCartStore } from "~/stores/cart.js";

export default defineNuxtPlugin(() => {
  const cartStore = useCartStore();
  cartStore.initializeCart();
});
