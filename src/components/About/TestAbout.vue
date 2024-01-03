<template>
  <v-container class="mx-auto mb-16 pb-16">
    <h1 class="text-md-h2  text-sm-h6 pl-md-6 pa-sm-0 text-center mt-16 pt-16">Testimonials</h1>

    <v-row align="center" justify="center">
      <v-col v-for="item in test" :key="item.id" md="4" min-height="300%">
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
      test: [{

        title: "Great job Angel Fashion",
        text: "Love the quality, color, texture, material, embroidery..everything about it! Perfect for completing the bridal look! Great job Asiana Fashion! Keep up the good work!",
        Rating: "5",
        name: "Ghazala",
        national: "Paris / Ill de France, France",
        img: "https://goodmorning1.com/wp-content/uploads/2020/03/1487-10.jpg"
      }, {

        title: "Really Appreciate Service",
        text: " Hi, This is to just let you know that I received the parcel, Thank you. I really appreciate the immediate reply and follow up by Asiana Fashion staff. Thank you so much.",
        Rating: "5",
        name: "Razia Ahmed",
        national: "Saarland, Germany",
        img: "https://cutee.net/wp-content/uploads/2020/10/2091-9.jpg"
      }, {

        title: "Nice outfit",
        text: "The outfit was really nice, got loads of compliments when worn and was even asked where it was bought etc, so Asiana Fashion might have another customer lined up soon!",
        Rating: "5",
        name: "Prince Gith",
        national: "New South Wales, Australia",
        img: "https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg?w=1060&t=st=1698945588~exp=1698946188~hmac=aa76ce9ef98bf3f5d0aab9dc089e00a993ff3fe480bef765ebfcc4a7972acfa0"
      },]
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
  transition: all 0.8ms ease-out;
  box-shadow: 2px 2px 4px #343434;
  background: linear-gradient(180deg, rgba(249, 176, 241, 0.388) 0%, #acbced52 56%, rgba(212, 212, 236, 1) 100%);
}

.testimonial:hover {
  background: linear-gradient(0deg, rgba(233, 179, 227, 0.388) 0%, #b8c6f152 56%, rgba(212, 212, 236, 1) 100%);
  box-shadow: 4px 4px 8px #343434;

}

.card:hover .avatar {
  top: 110px;
  box-shadow: 1px 0px 9px 1px #a6a4a4;
}
</style>
