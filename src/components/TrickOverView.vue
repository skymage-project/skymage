<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="showDiv"
      persistent
      max-width="290"
      @click:outside="toggleOverView"
    >
      <v-card>
        <v-card-title class="headline">
          <!-- {{ trick.price }} -->
          hhh
        </v-card-title>
        <v-card-text>
          text
          <!-- {{ trick.name }} -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="toggleOverView">View All Page</v-btn>
          <v-btn color="primary" @click="toggleOverView">Add To Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["showDiv", "trick"],
  name: "TrickOverView",
  data() {
    return { show: false };
  },
  methods: {
    toggleOverView() {
      this.$emit("toggle-over-view");
    },
  },
};
</script>
<style scoped></style>
