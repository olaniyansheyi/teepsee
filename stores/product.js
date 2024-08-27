import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    currentCategory: [],
    isLoading: false,
    error: "",
  }),
  actions: {
    async getProducts() {
      this.isLoading = true;
      try {
        const { $supabase } = useNuxtApp();
        const { data, error } = await $supabase.from("products").select("*");

        if (error) {
          console.error("supabase error", error);
          this.error = "Products could not be loaded";
        } else {
          this.products = data || [];
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        this.error = "An unexpected error occurred";
      } finally {
        console.log("yo");
      }
    },
    filterByCategory(category) {
      if (category === "ALL") {
        this.currentCategory = this.products;
      } else {
        this.currentCategory = this.products.filter(
          (product) => product.category === category
        );
      }
    },
  },
});
