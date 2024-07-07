import { defineStore } from 'pinia';

export const usePiniaStore = defineStore('pinia', {
  state() {
    return {
      likedProducts: [],
      basket: [],
      order:[]
    };
  },
  getters: {
    totalQuantity(state) {
      return state.basket.reduce((total, product) => total + product.quantity, 0);
    },
     totalPrice(state) {
      return state.basket.reduce((total, product) => total + product.quantity * product.newPrice, 0);
    }
  },
  actions: {
    toogleLikeProduct(product) {
      const index = this.likedProducts.findIndex(p => p.id === product.id);
      if (index === -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
    },
    toogleAddProduct(product) {
      const index = this.basket.findIndex(p => p.id === product.id);
      if (index === -1) {
        this.basket.push({ ...product, quantity: 1 });
      }
    },
    toogleRemoveProduct(product) {
      const index = this.basket.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.basket.splice(index, 1);
      }
    },
     toogleAddOrder(product) {
      const index = this.order.findIndex(p => p.id === product.id);
      if (index === -1) {
        this.basket.push({ ...product, quantity: 1 });
      }
    },
    updateProductInBasket(updatedProduct) {
      const index = this.basket.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.basket.splice(index, 1, { ...this.basket[index], ...updatedProduct });
      }
    },
    increaseQuantity(product) {
      const index = this.basket.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.basket[index].quantity++;
      }
    },
    decreaseQuantity(product) {
      const index = this.basket.findIndex(p => p.id === product.id);
      if (index !== -1 && this.basket[index].quantity > 1) {
        this.basket[index].quantity--;
      }
    }
  },
  persist: true
});
