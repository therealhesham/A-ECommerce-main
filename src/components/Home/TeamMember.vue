<template>
  <v-card :class="(gender == 'male') ? 'bg-blue-lighten-5' : 'bg-pink-lighten-5'" width="280">
    <slot name="imgUser"></slot>
    <div class="pa-4">

      <v-list-item-title class="py-2">
        <slot name="name"></slot>
      </v-list-item-title>

      <v-list-item-subtitle class="pt-2">
        <slot name="role"></slot>
      </v-list-item-subtitle>
    </div>
    <v-card-actions>
      <div class="justify-self-end">
        <v-btn color="primary" icon="mdi-twitter" size="small"></v-btn>
        <v-btn color="primary" icon="mdi-facebook" size="small"></v-btn>
        <v-btn color="primary" icon="mdi-linkedin" size="small"></v-btn>
        <v-btn color="green" icon="mdi-whatsapp" size="small"></v-btn>
      </div>

    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    gender: String
  }
}
</script>
