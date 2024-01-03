<template>
  <v-container>
    <h1 class="text-h3 ma-16 pl-md-6 pl-sm-0 text-center">Our Services</h1>
    <v-row align="center" justify="center" class="mt-10">
      <v-col v-for="item in services" :key="item" md="4">
        <v-card class="mx-auto bg-trans" variant="flat">
          <div class="image">
            <v-img class="align-end text-white img mx-auto" max-width="300" height="220" :src="item.img" cover>
            </v-img>
          </div>
          <div class="hidden">
            <v-card-title class="text-h6  mt-8">{{ item.title }}</v-card-title>
            <v-card-subtitle class="pb-6">
              {{ item.subtitle }}
            </v-card-subtitle>
          </div>
        </v-card></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      services: [
        { title: "24/7 CUSTOMER SERVICE", subtitle: "Service Support 24/7", img: "/src/assets/images/photo_2023-11-05_17-22-42.jpg" }, { title: "FREE SHIPPING WORLDWIDE", subtitle: "Free shipping worldwide", img: "/src/assets/images/photo_2023-11-05_17-41-18.jpg" },
        { title: "MONEY BACK GUARANTEE!", subtitle: "100% Money Back - 30 Days", img: "/src/assets/images/photo_2023-11-05_17-34-58.jpg" },

      ]
    }
  },
}
</script>
<style>
.image {
  position: relative;
  z-index: 1;
  border: 2px #111;
  border-radius: 20px;
}

.bg-trans {
  background-color: transparent;
}

.img {
  border: 1px solid rgba(221, 189, 244, 0.366);
  border-radius: 20px 0;
}

.hidden {
  width: 310px;
  position: relative;
  top: -120px;
  right: -32px;
  padding: 10px 0px;
  color: #111;
  text-align: center;
  z-index: 0;
  transition: 0.3s ease-in-out;
  background: linear-gradient(to right,
      #a4a4dd29,
      #f6edf49c);
  border-radius: 20px 0;
}

.v-card:hover .hidden {
  transform: translateY(80px);
  visibility: visible;
  opacity: 1;
  transition-delay: 0.2s;
  border-radius: 20px;
  border-bottom-left-radius: 0;

}

@media only screen and (max-width: 330px) {
  .hidden {
    width: 100%;
    right: 0px;
  }
}
</style>
