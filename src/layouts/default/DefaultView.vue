<template>
  <v-app>
    <DefaultBar />
    <DefaultView />

    <DefaultFooter />
    <BackToTop />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './ViewDefult.vue'
import DefaultFooter from "./FooterBar.vue"
import BackToTop from './BackToTop.vue';
</script>
