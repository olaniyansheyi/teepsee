import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  actions: {
    async signup({ fullName, email, password, address }) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      let response;
      try {
        response = await $supabase.auth.signUp({
          email,
          password,
          options: {
            data: { fullName, address },
          },
        });
        const { data, error } = response;
        if (error) throw error;
        this.user = data.user;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
      return response;
    },
    async login({ email, password }) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      let response;
      try {
        response = await $supabase.auth.signInWithPassword({
          email,
          password,
        });
        const { data, error } = response;
        if (error) throw error;
        this.user = data.user;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
      return response;
    },
    async logout() {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      let response;
      try {
        response = await $supabase.auth.signOut();
        const { error } = response;
        if (error) throw error;
        this.user = null;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
      return response;
    },
    async getCurrentUser() {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      let response;
      try {
        response = await $supabase.auth.getSession();
        const { data: session } = response;
        if (session.session) {
          const { data, error } = await $supabase.auth.getUser();
          if (error) throw error;
          this.user = data.user;
          console.log(this.user);
        } else {
          this.user = null;
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
      return response;
    },
    async fetchUser() {
      const { $supabase } = useNuxtApp();
      const {
        data: { user },
      } = await $supabase.auth.getUser();
      this.user = user;
    },
  },
});
