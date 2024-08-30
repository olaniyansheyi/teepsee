import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  // Data
  state: () => ({
    openMenu: false,
    openSearchQuery: false,
    showInfoModal: false,
    showRatingModal: false,
    showTrackingModal: false,
    showCheckoutModal: false,
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
    handleToggleShowRatingModal() {
      this.showRatingModal = !this.showRatingModal;
    },
    handleToggleShowTrackingModal() {
      this.showTrackingModal = !this.showTrackingModal;
    },
    handleToggleShowCheckoutModal() {
      this.showCheckoutModal = !this.showCheckoutModal;
    },
  },
});
