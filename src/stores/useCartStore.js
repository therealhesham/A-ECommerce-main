import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css"
export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
        cart: [],
    }),

    actions: {
        async fetchData() {
            let response = await fetch('./product.json');
            this.products = await response.json();
        },
        addToCart(product) {
            // toast("success adding to cart", { autoClose: 1000, });
            const existingProduct = this.cart.find(cartItem => cartItem.id === product.id);
            // toast("success adding to cart", { autoClose: 1000, });
            if (existingProduct) {
                toast.warning("you added it before to cart", { autoClose: 1000, }),
                    existingProduct.count++;
            } else {
                toast("success adding to cart", { autoClose: 1000, }),
                    product.count = 1;
                this.cart.push(product);
            }
        },

        removeFromCart(id) {
            const productIndex = this.cart.findIndex(item => item.id === id);
            if (this.cart[productIndex].count == 1) {
                this.cart = this.cart.filter((item) =>
                    item.id !== id)
                console.log(this.cart[productIndex].count)

            } else if (this.cart[productIndex].count > 1 && productIndex !== -1) {
                this.cart[productIndex].count -= 1
                console.log(this.cart[productIndex].count)
            }
        }
    },
    persist: true
})