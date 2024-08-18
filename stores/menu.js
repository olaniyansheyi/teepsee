import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  // Data
  state: () => ({
    openMenu: false,
    openSearchQuery: false,
    showInfoModal: false,
  }),
  actions: {
    handleToggleMenu() {
      this.openMenu = !this.openMenu;
    },
    handleToggleSearch() {
      this.openSearchQuery = !this.openSearchQuery;
    },
    handleToggleShowInfoModal() {
      this.showInfoModal = !this.showInfoModal;
    },
  },
});
