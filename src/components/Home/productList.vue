<template>
  <v-container class="mx-auto my-16">
    <p class="text-h2 text-center my-10">clothing Angel</p>
    <v-row justify="center">
      <v-col xs="12" md="3" sm="4" v-for="product in data.products.slice(0, productToShow)" :key="product.id">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
    <div class="my-5">
      <v-btn @click="loadMoreProducts"
        class="text-button-h6 text-md-h6 text-lg-h6 mx-auto  text-purple-darken-4 bg-purple-lighten-4 py-5" block
        rounded="xl" min-width="13%">
        {{ done ? 'Load Less' : 'Load More' }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import ProductCard from './ProductHome.vue';
import { useCartStore } from '@/stores/useCartStore';
import { ref } from "vue";
const data = useCartStore();
let productToShow = ref(8);
let done = ref(false);
// useCartStore.$onMounted(store => {
//   store.fetchData();
// });
// fetch('/public/json/product.json')
//   .then(response => response.json())
//   .then(json =>
//     data.products = json,
//   )

(async function datafetcher() {
  let response = await fetch('/json/product.json');
  data.products = await response.json();
  alert(data.products)
 })();
// zconsole.log(data.products);

function loadMoreProducts() {
  if (productToShow.value >= data.products.length) {
    done.value = true;
    productToShow.value = productToShow.value - 7;
  } else {
    done.value = false;
    productToShow.value = productToShow.value + 8;
  }
}
</script>


