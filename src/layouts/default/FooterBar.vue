<template>
  <v-footer class="pa-0 mt-16" theme="light">
    <v-row class="text-center footer" justify="space-between" align="center">
      <v-col class="d-flex justify-space-between align-center pt-4 bg-black ">
        <v-col>Get connected with us on social networks!</v-col>
        <v-col>
          <v-img :height="50" src="@/assets/Screenshot__295_-removebg-preview (1).png"></v-img>
        </v-col>
        <v-col>
          <div class="bg-black">
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small">
            </v-btn>
          </div>
        </v-col>
      </v-col>
      <v-divider :thickness="4"></v-divider>

      <v-col class="px-14 pt-0 mt-0">
        <h6 class="text-uppercase fw-bold mb-4 text-h6">
          <i class="fas fa-gem me-3 link-secondary"></i>Angel
        </h6>
        <p class="text-body-1 text">
          Here you can use organize your footer
          content.
        </p>
      </v-col>
      <v-col>
        <h6 class="text-uppercase fw-bold mb-4 text-h6">Pages</h6>
        <p>
          <a href="#!" class="text-reset">Home</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Cart</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Favorite</a>
        </p>
        <p>
          <a href="#!" class="text-reset">About</a>
        </p>
      </v-col>
      <!-- <v-col>
        <h6 class="text-uppercase fw-bold mb-4 text-h6">Useful links</h6>
        <p>
          <a href="#!" class="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Settings</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Orders</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Help</a>
        </p>
      </v-col> -->
      <v-col>
        <h6 class="text-uppercase fw-bold mb-4 text-h6">Contact</h6>
        <p>
          <v-icon class="fas fa-home me-3 link-secondary" icon="mdi-map-marker"></v-icon> Damascus
        </p>
        <p>
          <v-icon class=" me-3 link-secondary" icon="mdi-web"></v-icon>
          Store@Angel.com
        </p>
        <p>
          <v-icon icon="mdi-phone" class="me-3 link-secondary" />
          234 567 88
        </p>
        <p>
          <v-icon icon="mdi-phone" class="me-3 link-secondary" />
          234 567 89
        </p>
      </v-col>
      <v-col md="12" class="px-4 py-10 text-center w-100 bg-green ">
        {{ new Date().getFullYear() }} — <strong class="pt-10">Angel E-commerce</strong>
      </v-col>
    </v-row>

    <div class="triangle"></div>
  </v-footer>
  <!-- Footer -->

  <!-- Footer -->
</template>

<!-- <style>
@media only screen and (max-width: 600px) {
  .v-row,.v-footer {
    width: 320px !important;
  }
}
</style> -->

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      'mdi-github',
      'mdi-google'
    ],
  }),
}
</script>
<style>
a {
  text-decoration-line: none;
  color: rgb(53, 3, 73);
}

.triangle {
  width: 0;
  height: 0;
  border: 200px solid transparent;
  border-top: 0;
  border-bottom: 199px solid red;
  position: absolute;
  left: -111px;
  bottom: 77px;
  transform: rotate(90deg);
}


.v-footer {
  overflow: hidden;
  z-index: 1;
}

@media only screen and (max-width: 330px) {
  .footer * {
    flex-basis: content !important;
  }

  .triangle {
    border: 317px solid transparent;
    border-bottom: 138px solid red;
    bottom: 39px;
  }

}
</style>