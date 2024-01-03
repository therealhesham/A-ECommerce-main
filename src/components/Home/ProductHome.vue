<template>
  <v-card width="280">
    <v-img class="align-end pa-0 ma-0" height="270" :src="product.img" cover>
    </v-img>

    <div class="bg-deep-purple-lighten-5 pa-0 ma-0">

      <v-card-title class="t
        text-title-2 px-4 pt-4 pb-1">
        {{ product.title }}
      </v-card-title>
      <span class="text-subtitle-1 pl-4">
        <slot name="count" />
      </span>

      <v-card-text class="pb-2 px-6">
        <v-row justify="space-between" align="center" class="py-0">
          <div>
            <v-rating half-increments readonly :length="5" size="small" density="compact" :model-value="product.rating"
              color="yellow" active-color="yellow-darken-1"></v-rating>
          </div>
          <p class="text-h6 text--primary">
            {{ product.price }}
          </p>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-space-evenly py-0">
        <v-dialog persistent width="900" height="400" class="py-0">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" elevation="1" v-bind="props">
              Details
            </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card height="100%">
              <v-row justify="center" align="center" height="100%" class="ma-0">
                <v-col md="5" class="pa-0">
                  <v-img height="400px" width="400px" :src="product.img" cover />
                </v-col>
                <v-col class="py-0">
                  <v-card-title class="text-h4">
                    {{ product.title }}
                  </v-card-title>
                  <v-card-subtitle>{{ product.Department }} {{ product.season }}</v-card-subtitle>
                  <div class="pl-4">
                    <v-rating half-increments readonly :length="5" size="small" density="compact"
                      :model-value="product.rating" color="yellow" active-color="yellow-darken-1"></v-rating>
                  </div>
                  <v-card-text class="text-h6 space-line py-0">{{ product.description }}</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green-darken-1" variant="text" @click="isActive.value = false">
                      close
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>

            </v-card>
          </template>
        </v-dialog>
        <v-btn icon @click="store.addToCart(product)">
          <v-icon color='deep-purple-lighten-2'>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon @click="love.addToLove(product)">
          <v-icon color="red-darken-4">mdi-heart</v-icon>
        </v-btn>
        <slot name="actions" />
      </v-card-actions>
    </div>
  </v-card>
</template>
<script setup>
import { useCartStore } from '@/stores/useCartStore';
import { useLoveStore } from '@/stores/useLoveStore'

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const love = useLoveStore()
const store = useCartStore()
</script>

<style>
.space-line {
  line-height: 2rem !important;
}
</style>