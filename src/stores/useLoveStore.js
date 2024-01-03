import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css"
export const useLoveStore = defineStore('love', {
    state: () => ({
        products: [],
        love: [],
    }),

    actions: {
        addToLove(product) {
            if (!this.love.find(cartItem => cartItem.id === product.id)) {
                toast("success adding to Favorite", { autoClose: 1000, }),
                    this.love.push(product);
            } else {
                toast.warning("you added it before", { autoClose: 1000, })
            }
        },
        removeFromLove(id) {
            this.love = this.love.filter((item) => item.id !== id);
        },
    },
    persist: true
})