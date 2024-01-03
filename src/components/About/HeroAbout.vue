<template>
  <v-card rounded="1" class="bg-black mb-16" id="home">

    <v-carousel cycle v-model="onboarding" show-arrows="hover" class="mt-10  bg-about" height="100%" hide-delimiters>
      <v-carousel-item v-for="item in items" :key="item">
        <v-card height="600" class="d-flex justify-center align-center">
          <v-img height="100%" cover gradient="to left top,#F8BBD0,#BBDEFB">
            <v-container>
              <v-card class="mb-sm-16">
                <v-img height="100%" cover src="/src/assets/photo_2023-11-03_01-10-11.jpg">
                  <v-row min-width="100%" height="100%">
                    <div class="d-flex flex-wrap justify-center align-center">
                      <v-col cols="12" md="6" class="pa-md-0 ma-0 pt-sm-10">
                        <v-card-title class="bg-text text-md-h3 pa-md-10 ">{{ item.title
                        }}</v-card-title>

                        <v-card-text
                          class="ml-md-8 ml-sm-1 pa-sm-0  text-md-h5 text-sm-h6  font-weight-regular text-grey-darken-1 text-LH">{{
                            item.content
                          }}</v-card-text>
                      </v-col>
                      <v-col md="6" sm="12" class="img-responsive ">
                        <v-avatar size="600" cover rounded="0" class="img-responsive ">
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </v-col>
                    </div>

                  </v-row>
                </v-img>
              </v-card>

            </v-container>
          </v-img> </v-card>
      </v-carousel-item>
    </v-carousel>



  </v-card>
</template>
<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 1,
    items: [
      {
        title: "shopping time",
        content: "Explore an enchanting world of children's clothing products in the Angel online store and discover beauty and sophistication in every design.",
        src: "/src/assets/images/photo_2023-11-03_20-46-21-removebg-preview.png"

      },
      {
        title: "Winter Colection",
        content: "Enjoy an easy and fun shopping experience at Angel online store and discover our amazing selection of children’s clothing for girls and boys  that meets all your child’s needs",
        src: "/src/assets/images/photo_2023-11-03_23-32-28-removebg-preview.png"

      },
      {
        title: "Summer Colection",
        content: "Ensure your child's comfort and style with our carefully crafted and fashion-forward children's clothing.They have a variety of options to choose from",
        src: "/src/assets/images/photo_2023-11-04_23-36-30-removebg-preview.png"

      },
      {
        title: "Summer Girls Clothing",
        content: "The clothing store is your ideal destination to find the latest fashion trends and the most beautiful designs. The store offers you a wide variety of modern and practical clothes for girls",
        src: "/src/assets/images/photo_2023-11-03_20-47-339-removebg-preview.png"

      },
      {
        title: "Summer  Boys Clothing",
        content: "Get ready to explore our amazing collection of girls’ clothing at Angel online store and let your child shine with unparalleled elegance.",
        src: "/src/assets/images/rBNaOGELtAGAOfmdAADmsTViwfk306-removebg-preview.png"
      }, {
        title: "Winter Girls Clothing",
        content: "Dress your girls in the cutest outfits that will make them feel confident and happy.They have a variety of options to choose from,including different colors and designs",
        src: "/src/assets/images/photo_2023-11-04_22-21-01-removebg-preview.png"

      }, {
        title: "winter Boys Clothing",
        content: "The Angel store offers a range of clothing for boys, including jeans, jackets, sweaters and T-shirts. They have a variety of options to choose from, including different colors and designs.",
        src: "/src/assets/images/5181-removebg-preview.png"
      },
      {
        title: "Girls' Dresses",
        content: "Angel offers a wide selection of girls' dresses, including casual and formal styles. Their collection includes dresses for different seasons and occasions, such as summer dresses and winter dresses.",
        src: "/src/assets/images/dressremovebg-preview.png"
      },
      // {
      //   title: "Boys' Suits",
      //   content: "Angel offers a smart suit set for boys that includes a white shirt, adjustable tie, vest, trousers and a fully lined vest. The collection is designed to suit boys in a formal and elegant way.",
      //   src: "/src/assets/images/r-bg/New folder/photo_2023-11-03_20-47-46-removebg-preview.png"
      // },

      // {
      //   title: "Children's Shoes",
      //   content: "children's shoes come in a variety of styles and designs, including sandals, boots, and athletic shoes. When choosing shoes for children, it's important to consider factors like  comfort, and support.",
      //   src: "/src/assets/images/r-bg/New folder/photo_2023-11-04_01-01-11-removebg-preview.png"
      // },
      {
        title: "Home Delivery Service",
        content: "We have a home delivery service with a guarantee of quality within a short period. All you have to do is choose the products you like and we are ready",
        src: "/src/assets/images/photo_2023-11-03_20-46-43-removebg-preview.png"
      }, {
        content: "We stand with the people of Palestine in these difficult times, and strongly condemn the violence and injustice they face. The violence must stop and the Palestinian people must achieve peace and justice. We hope that Palestine will regain peace and security and that its people will live in dignity and freedom."
        , src: "/src/assets/images/photo_2023-11-11_14-28-33-removebg-preview.png"
      },
    ],
  }),
}
</script>
<style>
.bg-text {
  background: #e099d2;
  background: linear-gradient(to right,
      #7f7ff1d6,
      #f584e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-LH {
  line-height: 2.3rem !important;
}

@media only screen and (width: 320px) {
  .img-responsive {
    width: 320px !important;
    height: 400px !important;
  }
}
</style>
