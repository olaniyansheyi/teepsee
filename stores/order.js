import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useOrderStore = defineStore("order", {
  state: () => ({
    isLoading: false,
    order: null,
    error: false,
  }),
  actions: {
    async createOrder(newOrder) {
      try {
        this.isLoading = true;
        const { $supabase } = useNuxtApp();
        const { data, error } = await $supabase
          .from("order")
          .insert([newOrder])
          .select("uuid")
          .single();

        if (error) {
          console.error("order could not be created");
          this.error = true;
        }
        this.error = false;
        return data;
      } catch (error) {
      } finally {
        this.isLoading = false;
      }
    },

    async getOrder(currentOrderId) {
      const { $supabase } = useNuxtApp();
      this.isLoading = true;
      try {
        const { data, error } = await $supabase
          .from("order")
          .select("*")
          .eq("uuid", currentOrderId)
          .single();

        if (error || !data) {
          throw new Error("Order could not be fetched");
        }
        this.order = data;
        return data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {},
});
