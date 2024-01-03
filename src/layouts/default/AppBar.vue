<template>
  <v-app-bar>
    <template v-slot:image>
      <!-- <v-img gradient="to top left,#BBDEFB,#F8BBD0"></v-img> -->
    </template>
    <v-app-bar-title class="pl-0 ml-0">
      <v-img :width="350" class="logo" src="@/assets/Screenshot__295_-removebg-preview (1).png" cover></v-img>
    </v-app-bar-title>


    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in menu" class="text-h6 px-2 mx-1 text-purple-darken-4" :key="item.icon"><router-link
          :to="item.path">{{
            item.title }}</router-link></v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon> <v-icon>mdi-list</v-icon></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.icon" class="text-h5 mx-5">
          <v-list-tile-content class="text-h5 mx-5">
            <v-list-tile-title><router-link :to="item.path" class="text-h5 mx-5">{{ item.title }}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
        </v-list-tile>
      </v-list>
    </v-menu>


    <!-- <v-container class="d-flex align-center justify-center">
      <router-link to="/" class="text-h5 mx-5">Home</router-link>
      <router-link to="About" class="text-h5 mx-5">About</router-link>
      <router-link to="Product" class="text-h5 mx-5">Product</router-link>
      <router-link to="contact" class="text-h5 mx-5">Contact US</router-link>
    </v-container> -->

    <div class="pr-1">
      <v-btn icon>
        <v-icon color='brown-darken-3'>mdi-login</v-icon>
      </v-btn>
      <v-btn icon to="Cart">

        <v-badge location="right top" :content="totalCount" color="deep-purple-lighten-2"><v-icon
            color='deep-purple-lighten-1'>mdi-cart</v-icon></v-badge>
      </v-btn>
      <v-btn icon to="Favorite">
        <v-icon color="red-darken-4">mdi-heart</v-icon>
      </v-btn>
      <v-btn icon @click="toggleTheme()">
        <v-icon color="brown-lighten-2"> mdi-brightness-4</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { useCartStore } from '@/stores/useCartStore';
import { useTheme } from 'vuetify'
export default {
  data() {
    const theme = useTheme()
    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
    return {
      menu: [
        { path: '/', title: 'Home' },
        { path: '/About', title: 'About' },
        { path: '/Product', title: 'Product' },
      ],
      cart: [],
      totalCount: 0,
      theme,
      toggleTheme,
    }
  },
  created() {
    setInterval(() => {
      this.cart = useCartStore().cart;
      this.totalCount = this.cart.reduce((accumulator, item) => {
        return accumulator + item.count;

      }, 0);
    }, 1000); // Specify the timeout in milliseconds (in this example, it's 2 seconds)
    // this.cart = useCartStore().cart;
  },
}


</script>
<style>
.v-app-bar {
  max-width: 100vw !important;
  background: linear-gradient(to top left, #82bce9b8, #f88fb4bb) !important;
  backdrop-filter: blur(18px) !important;
}

.v-toolbar-items .v-btn:focus {
  background-color: rgba(171, 110, 184, 0.427) !important;
}

@media only screen and (max-width: 330px) {
  .logo {
    max-width: 70vw !important;
    height: 80px !important;
    position: fixed;
    top: 0;
    left: -50px;
    object-fit: cover;
  }

  .v-toolbar__content {
    width: 320px !important;
  }

  .v-app-bar.v-toolbar {
    width: 320px !important;
  }

}

.v-app-bar {
  overflow: hidden !important;
}
</style>
