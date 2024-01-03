<template>
    <v-container id="home">
        <p class="text-h2 text-center my-16 pt-16">clothing Angel</p>
        <v-row justify="center">
            <v-col xs="12" md="3" sm="4" v-for="(product, index) in displayedProducts" :key="index">
                <ProductCard :product="product" />
            </v-col>
        </v-row>
        <v-pagination class="mt-16" v-model="currentPage" :length="totalPages" @input="updatePage"
            rounded="circle"></v-pagination>
    </v-container>
</template>

<script setup>
import ProductCard from '../Home/ProductHome.vue';
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/useCartStore';
const store = useCartStore();
const currentPage = ref(1);
const pageSize = 12;

const displayedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return store.products.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(store.products.length / pageSize));

function updatePage(newPage) {
    currentPage.value = newPage;
}
</script>