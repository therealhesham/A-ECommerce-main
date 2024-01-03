<script setup>
import { useLoveStore } from "@/stores/useLoveStore.js"
import ProductCard from "@/components/Home/ProductHome.vue"
import { computed } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter()

const store = useLoveStore();
const products = computed(() => store.love);
const removeFromLove = (id) => {
  store.removeFromLove(id)
};
</script>
<template>
  <v-container class="mt-16 pt-16" id="home">
    <h1 class="text-h3 text-center mb-16">Shopping Favorite - From Website Angel</h1>

    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" lg="3">
        <ProductCard :product="product">
          <template #actions>
            <v-btn icon="mdi-delete" color="error" @click="removeFromLove(product.id)" />
          </template>
        </ProductCard>
      </v-col>
    </v-row>
  </v-container>
</template>

