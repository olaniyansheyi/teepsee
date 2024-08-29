import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    inCart: false,
  }),
  actions: {
    initializeCart() {
      if (process.client) {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) {
          this.cart = savedCart;
        }
      }
    },

    handleAddToCart(currentProduct) {
      const newItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        image: currentProduct.image,
        quantity: currentProduct.quantity,
        price: currentProduct.price,
        category: currentProduct.category,
      };
      this.cart.push(newItem);
      this.saveCartToLocalStorage();
    },
    handleDeleteFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();
    },

    isInCart(productId) {
      return this.cart?.some((item) => item.id === productId);
    },
    increaseQuantity(productId) {
      const item = this.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1;
      }
      this.saveCartToLocalStorage();
    },

    decreaseQuantity(productId) {
      const item = this.cart.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      if (process.client) {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
  },

  getters: {
    cartItemCount: (state) => state.cart.length,

    totalPriceCost: (state) => {
      return state.cart.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    },
  },
});
