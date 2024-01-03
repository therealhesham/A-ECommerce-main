<template>
  <v-parallax class="overlay-lighten" src="/imgHome/photo_2023-11-26_19-05-24.jpg" height="750" id="home">
    <div class="d-flex flex-column fill-height justify-center align-center">
      <vue-typewriter-effect :strings="['Welcome to Angel Store']"
        class="text-md-h1 text-center font-weight-bold  pb-16 text-home">
      </vue-typewriter-effect>
    </div>
  </v-parallax>
</template>
<script >
import VueTypewriterEffect from "vue-typewriter-effect"
export default {
  components: {
    VueTypewriterEffect
  },
  data() {
    return {
      // items: [
      //   {
      //     content: "Explore an enchanting world of children's clothing products in the Angel online store and discover beauty and sophistication in every design.",
      //     src: "../../imgHome/boy.png",
      //   },
      //   {
      //     content: "Enjoy an easy and fun shopping experience at Angel online store and discover our amazing selection of children’s clothing for girls, boys and babies that meets all your child’s needs",
      //     src: "../../imgHome/boy.png",
      //   },
      //   {
      //     content: "Ensure your child's comfort and style with our carefully crafted and fashion-forward children's clothing.",
      //     src: "../../imgHome/clothgirl.png"
      //   },
      //   {
      //     content: "The clothing store is your ideal destination to find the latest fashion trends and the most beautiful designs. The store offers you a wide variety of modern and practical clothes for boys",
      //     src: "../../imgHome/boy.png",
      //   },
      //   {
      //     content: "Get ready to explore our amazing collection of girls’ clothing at Angel online store and let your child shine with unparalleled elegance.",
      //     src: "../../imgHome/clothgirl.png"
      //   }, {
      //     content: "Dress your baby in the cutest outfits that will make them feel confident and happy.",
      //     src: "../../imgHome/girlWinter.png"
      //   },
      // ],
    }
  },
}
</script>
<style>
.overlay-lighten {
  opacity: 0.7;
  position: fixed;

}

.text-home {
  background: linear-gradient(90deg,
      rgb(218, 36, 133) 0%,
      rgb(172, 36, 210) 35%,
      rgba(55, 0, 255, 0.865) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (max-width: 330px) {
  .text-home {
    font-size: 40px !important;
    ;
  }
}
</style>
