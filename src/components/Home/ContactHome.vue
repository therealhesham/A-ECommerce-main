<template>
  <v-container class="ma-0 bg pb-0 pa-sm-0 mb-16" id="contact" fluid>
    <v-row justify="space-between" align="center">
      <v-col md="6" class="pl-md-16 pad-less" align-self="center">
        <v-form class="w-75 px-md-16 py-10 px-2 glass-card">
          <v-text class="text-h6 text-md-h5 text-sm-h6 font-weight-bold bg-text">WHAT DO YOU THINK?</v-text>
          <v-text-field v-model="name" :counter="10" :rules="[rules.name]" label="Name" required class="mt-10"
            color="deep-purple"></v-text-field>
          <v-text-field v-model="Email" :counter="10" :rules="[rules.email]" label="Email" required
            color="deep-purple"></v-text-field>
          <v-text-field v-model="password" :rules="[rules.password, rules.length(6)]" variant="filled" color="deep-purple"
            counter="6" label="Password" style="min-height: 96px" type="password"></v-text-field>
          <v-textarea clearable color="deep-purple" v-model="Message" :counter="30" label="Your Comment"
            variant="outlined" required></v-textarea>

          <v-btn class="bg mt-4 text-purple-lighten-5 text-center" rounded="xl" size="x-large" elevation="4"
            variant="tonal" @click="validate">
            Submit
          </v-btn>

        </v-form>
      </v-col>
      <v-col class="pb-0" align-self="end"> <v-img class="ob-fit pt-16 pb-0 mb-0" :height="700"
          src="/imgHome/young-man-with-headset-pointing-lateral-removebg-preview.png"></v-img>
      </v-col>


    </v-row>

  </v-container>
</template>
<script>
export default {
  data: () => ({
    name: '',
    Email: undefined,
    password: '',
    Message: "",
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required',
      name: v => !!v || 'Name is required',
    },
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()
      if (valid) alert('Form is valid')
    },
  },
}
</script>
<style>
.bg {
  background: #e099d2;
  background: linear-gradient(to right,
      #7979bc57,
      #e09dd456);
}

.bg-text {
  background: linear-gradient(to right,
      #5555c3,
      #a94b98);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-card {
  backdrop-filter: blur(10px);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: 70px;
}

@media only screen and (width: 320px) {
  .v-form {
    width: 300px !important;
    margin: 0 auto;
  }

  .pad-less {
    padding: 0 !important;
  }

  .bg-text {
    margin: 0 35px !important;
  }

  .bg {
    margin: 0 80px;
  }

  .v-img__img {
    object-fit: fill !important;
  }
}
</style>
