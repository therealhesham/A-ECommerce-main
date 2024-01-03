<template>
  <v-container width="900" class="mx-auto my-16">
    <h1 class="text-h2 text-center my-10">Our Team</h1>
    <v-row justify="center">
      <v-col md="3" sm="12" v-for="member in teams" :key="member.id">
        <TeamMember :gender=member.gender>
          <template #imgUser>
            <v-img height="230px" width="100%" :src="member.url" cover>
            </v-img>
          </template>
          <template #name>
            {{ member.first_name }} {{ member.last_name }}
          </template>
          <template #role>
            {{ member.job_title }}
          </template>
        </TeamMember>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamMember from './TeamMember.vue';
export default {
  components: {
    TeamMember,
  },
  data() {
    return {
      url: "/json/team.json",
      teams: [],
    }
  },
  //   (async () => {
  //   let response = await fetch(this.url);
  //   this.teams = await response.json();

  // });
  async created() {
    let response = await fetch(this.url);
    this.teams = await response.json();
   
  },
}
</script>
<style scoped>
v-col {
  flex-basis: auto !important;
}
</style>