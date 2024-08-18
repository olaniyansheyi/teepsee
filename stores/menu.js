import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  // Data
  state: () => ({
    openMenu: false,
  }),
  actions: {
    handleToggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
});
