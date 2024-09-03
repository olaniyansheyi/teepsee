import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
    avatar_url: "",
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

    async updateProfile({ fullName, address, email }) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await $supabase.auth.updateUser({
          data: { fullName, address, email },
        });
        if (error) throw error;
        this.user = data.user;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async updateUserPassword({ oldPassword, newPassword }) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;

      try {
        const { error: signInError } = await $supabase.auth.signInWithPassword({
          email: this.user.email,
          password: oldPassword,
        });
        if (signInError) throw new Error("Incorrect old password");

        const { error: passwordError } = await $supabase.auth.updateUser({
          password: newPassword,
        });
        if (passwordError) throw passwordError;

        return { success: true };
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async uploadAvatar(file) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;

      try {
        if (!this.user) throw new Error("No user logged in");

        const fileExt = file.name.split(".").pop();
        const fileName = `${this.user.id}.${fileExt}`;
        const filePath = `${fileName}`;

        let { error: uploadError } = await $supabase.storage
          .from("avatars")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: true,
          });

        if (uploadError) throw uploadError;

        await $supabase.auth.updateUser({
          data: { avatar_url: filePath },
        });

        this.user = { ...this.user, avatar_url: filePath };

        return { success: true };
      } catch (error) {
        this.error = error.message;
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async getAvatarUrl() {
      const { $supabase } = useNuxtApp();

      if (!this.user || !this.user.avatar_url) return null;

      const { data, error } = await $supabase.storage
        .from("avatars")
        .getPublicUrl(this.user.avatar_url);

      if (error) {
        this.error = error.message;
        return null;
      }

      this.avatar_url = data.publicUrl;

      return data.publicUrl;
    },
  },
});
