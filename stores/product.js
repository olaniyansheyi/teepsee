import { defineStore } from "pinia";
import { useNuxtApp, navigateTo } from "#app";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    currentCategory: [],
    currentCategoryName: "ALL",
    isLoading: false,
    isLinking: false,
    error: "",
    isInProductPage: false,
    priceRange: { min: 0, max: Infinity },
    selectedPriceRange: null,
    searchedProducts: [],
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

    navigateToProduct(productId) {
      navigateTo(`/products/${productId}`);
    },

    increaseQuantity(productId) {
      const product = this.getProductById(productId);
      if (product) {
        product.quantity = product.quantity + 1;
      }
    },

    decreaseQuantity(productId) {
      const product = this.getProductById(productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    async searchProducts(query) {
      try {
        this.isLoading = true;

        const { $supabase } = useNuxtApp();
        const { data, error } = await $supabase
          .from("products")
          .select("*")
          .or(`name.ilike.%${query}%,category.ilike.%${query}%`);

        if (error) {
          console.log(error);
        }

        this.searchedProducts = data;
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    async toggleFavorite(productId) {
      try {
        this.isLinking = true;
        const { $supabase } = useNuxtApp();
        const product = this.products.find((p) => p.uuid === productId);

        const updateFavoriteStatus = !product.favorite;

        const { data, error } = await $supabase
          .from("products")
          .update({ favorite: updateFavoriteStatus })
          .eq("uuid", productId)
          .select("favorite")
          .single();

        if (error) {
          throw new Error("Could not update the favorite status");
        }

        this.isLinking = false;

        product.favorite = data.favorite;

        return product.favorite;
      } catch (error) {
        this.error = error.message;
      }
    },
  },

  getters: {
    getProductById: (state) => (uuid) => {
      return state.products.find((product) => product.uuid === uuid);
    },
  },
});
