<template>
  <v-parallax contain height="300" width="100%">
    <v-img contain aspect-ratio="1" class="my-10"
      src="https://images.squarespace-cdn.com/content/v1/5eb9fc2067d69f6de4164db1/1589753174599-N0JG7T03TCQFLZPMIH6Q/testimonials+copy.jpg?format=1500w"></v-img></v-parallax>

  <v-container class="mx-auto">
    <v-row align="center" justify="center">
      <v-col v-for="item in testimon" :key="item.id" md="4" min-height="300%">
        <div class="card">
          <v-img cover :src="item.img" class="avatar"></v-img>
          <v-card class="testimonial mx-auto my-12 pt-16" max-width="350">
            <v-card-item class="pb-0">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-rating :model-value="item.Rating" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>
            </v-card-item>
            <v-card-text class="test-text">

              <div>
                <v-icon class="me-1" color="grey" icon="mdi-format-quote-open"></v-icon>

                {{ item.text }}
                <v-icon class="me-1" color="grey" icon="mdi-format-quote-close"></v-icon>

              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-item>
              <v-card-subtitle class="text-subtitle-2 me-1">{{ item.name }}</v-card-subtitle>
              <v-card-subtitle class="me-1">{{ item.national }}</v-card-subtitle>
            </v-card-item>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      testimon: [
        {

          title: "great quality.",
          text: " I have order a two colour saree and I must say they saree is so beautiful and products are of great quality and looks stunning. It looks exactly like the picture.",
          Rating: "4.5",
          name: "Ericka Alad",
          national: "Nordrhein-Westfalen, Germany",
          img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1060&t=st=1698945852~exp=1698946452~hmac=5153fc7f025f8e9f998e997626b68aa98bb77e006de6980d3a90bbcbdfd1a3d6"
        }, {

          title: "Extremely pleased",
          text: " Their customer service is very helpful and the products themselves are so beautiful and unique! I am going abroad for my wedding and have bought all  shoes from this website.",
          Rating: "5",
          name: "Sonia Akli",
          national: "coulsdon, Surrey, United Kingdom",
          img: "https://babyy.cc/wp-content/uploads/2019/04/908.jpg"
        }, {

          title: "Very Unique Products.",
          text: "The products offered on this website are very unique. I Love my outfit!! The stitching is so perfect and worth the price. Perfect place to purchase Ethnic clothes.",
          Rating: "5",
          name: "Maryse Ramid",
          national: "Alberta, Canada",
          img: "https://ddreams.cc/wp-content/uploads/2019/06/1104-4.jpg"
          // }, {

          //   title: "great customer service",
          //   text: " Ordered several outfits from these guys absolutely beautiful and a great customer service very friendly highly recommend thanks guys and keep up the good work",
          //   Rating: "3",
          //   name: "Shuchi Shah",
          //   national: "Queensland, Australia",
          //   img: "https://ddreams.cc/wp-content/uploads/2020/08/4280-5.jpg"
          // }, {

          //   title: "Very satisfied.",
          //   text: " I really like your site and your customer service. Very easy to search, order and pay. Quality merchandise and fast delivery too. Keep up the good work. Very satisfied.",
          //   Rating: "5",
          //   name: "Marina Rao",
          //   national: "Paris / Ill De France, France",
          //   img: "https://img.freepik.com/free-photo/expressive-senior-woman-posing_344912-3042.jpg?w=1060&t=st=1698946055~exp=1698946655~hmac=51b83948b3a8c1dcf0aa654f14b19e8318dc758be71c2d9c57feeea6c33a7c55"
          // }
        }]
    }
  },
}
</script>
<style>
.avatar {
  height: 200px;
  width: 200px;
  position: relative;
  top: 120px;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 300ms ease-out;
  z-index: 99;
  border-radius: 50%;
  border: 7px solid #FEF7F7;
}

.testimonial {
  border-radius: 20px;
  cursor: pointer;
  transition: all 300ms ease-out;
  box-shadow: 2px 2px 4px #343434;
  background: rgb(204, 141, 197);
  background: linear-gradient(180deg, rgba(204, 141, 197, 0.4599089635854342) 0%, rgba(145, 162, 211, 0.4907212885154062) 56%, rgba(212, 212, 236, 1) 100%);
}

.testimonial:hover {
  background: rgb(204, 141, 197);
  background: linear-gradient(0deg, rgba(204, 141, 197, 0.4599089635854342) 0%, rgba(145, 162, 211, 0.4907212885154062) 56%, rgba(212, 212, 236, 1) 100%);
  box-shadow: 4px 4px 8px #343434;

}

.card:hover .avatar {
  top: 110px;
  box-shadow: 1px 0px 9px 1px #a6a4a4;

}
</style>
