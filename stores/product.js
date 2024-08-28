import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    currentCategory: [],
    currentCategoryName: "ALL",
    isLoading: false,
    error: "",
    isInProductPage: false,
    priceRange: { min: 0, max: Infinity },
    selectedPriceRange: null,
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
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        this.error = "An unexpected error occurred";
      } finally {
        console.log("yo");
        this.isLoading = false;
      }
    },

    async filterByCategory(category) {
      if (this.products.length === 0) {
        await this.getProducts();
      }

      if (category === "ALL") {
        this.currentCategory = this.products;
      } else {
        this.currentCategory = this.products.filter(
          (product) => product.category === category
        );
      }
    },
    toggleIsInProductPage() {
      this.isInProductPage = !this.isInProductPage;
    },
    toggleCurrentCategoryName(category) {
      this.currentCategoryName = category;
    },

    setPriceRange(min, max) {
      this.priceRange = { min, max };
      this.applyFilters();
    },
    selectPriceRange(range) {
      this.selectedPriceRange = range;
      switch (range) {
        case "under10000":
          this.setPriceRange(0, 10000);
          break;
        case "10000to50000":
          this.setPriceRange(10000, 50000);
          break;
        case "51000to150000":
          this.setPriceRange(51000, 150000);
          break;
        default:
          this.setPriceRange(0, Infinity);
          break;
      }
    },
    async applyFilters() {
      //To reset the filter
      await this.filterByCategory(this.currentCategoryName);

      let filtered;
      filtered = this.currentCategory.filter(
        (product) =>
          product.price >= this.priceRange.min &&
          product.price <= this.priceRange.max
      );

      this.currentCategory = filtered;
    },

    async clearProductFilter() {
      this.priceRange = { min: 0, max: Infinity };

      await this.filterByCategory(this.currentCategoryName);
    },
  },
});
