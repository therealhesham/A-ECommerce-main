<template>
  <v-container height="50%">
    <v-row align="center" justify="center" height="400" class="mt-16">
      <v-col md="6" sm="12">
        <v-img height="390" width="500" cover src="/src/assets/images/photo_2023-11-05_01-32-55.jpg"></v-img>
      </v-col>
      <v-col md="6" sm="12">
        <v-card class="py-7 bg ma-md-auto mx-sm-0" min-height="390">
          <h1 class="text-md-h3 text-sm-h6 mp-md-5 ma-sm-0 pl-6">Some Words About Us</h1>
          <v-divider width="100" :thickness="2" class="border-opacity-50 ml-6" color="pink"></v-divider>
          <v-divider width="100" :thickness="2" class="border-opacity-50 ml-6" color="blue"></v-divider>
          <v-card-text class="text-h6 py-md-5 text-grey-darken-1 pl-6">
            The store offers a wide range of fashionable and comfortable clothing for children of all ages.
            The store focuses on providing high-quality products that meet the needs and preferences of both parents and
            children.
            The store's inventory includes a variety of styles, colors, and sizes to ensure that every child can find
            something they love.
            The store sources its clothing from reliable and trusted suppliers, ensuring that all products meet the
            highest standards of quality and safety.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="6" sm="12">
        <div class="pr-md-16 pr-sm-0 mt-16">
          <h1 class="text-h3 mb-5">Why Our Shop</h1>
          <v-divider width="100" :thickness="2" class="border-opacity-50" color="pink"></v-divider>
          <v-divider width="100" :thickness="2" class="border-opacity-50" color="blue"></v-divider>
          <v-expansion-panels class="pt-9">
            <v-expansion-panel v-for="item in Features" :key="item">
              <v-expansion-panel-title class="text-deep-purple-lighten-1  text-h6 bg">{{ item.title
              }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                {{ item.text }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col md="6" sm="12">
        <v-img class="mt-16" height="330" width="600" cover
          src="/src/assets/images/photo_2023-11-05_15-22-39.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      Features: [
        {
          title: "shopping online", text: "Online shopping allows customers to browse and purchase products from the comfort of their own homes,can save time and effort compared to traditional in-person shopping"
        }, {
          title: "High-Quality Clothing", text: "Our shop offers high-quality clothing made with durable materials that are designed to last. We have a variety of styles and sizes to choose from"
        }, {
          title: "Skilled Customer Service", text: "We pride ourselves on providing skilled customer service to help you find the perfect clothing and shoes for your child. Our staff is knowledgeable and friendly, and we are always happy to answer any questions you may have."
        }, {
          title: "Delivery of clothing to home", text: "This service allows customers to purchase clothing items online and have them delivered directly to their homes. This process involves several steps, including order placement, packaging, shipping, and delivery"
        }
      ]
    }
  },
}
</script>

<style>
.bg {
  background: #e099d2;
  background: linear-gradient(to right,
      #7979bc57,
      #e09dd456);
  margin: 0 !important;
}

.v-card-text {
  line-height: 1.8rem !important;
}
</style>
