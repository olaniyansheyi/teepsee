import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    inCart: false,
  }),
  actions: {},

  getters: {},
});
