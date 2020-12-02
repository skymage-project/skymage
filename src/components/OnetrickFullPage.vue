<template>
  <div>
    <v-parallax
      dark
      style="opacity: 0.3;"
      :src="this.product.urlPictures[0].urlPictures"
    >
    </v-parallax>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-container fill-height> </v-container>
      </v-col>
      <!-- <v-col cols="6"> {{ displayedTricks.price }} </v-col> -->
      <h1>This is {{ this.product.name }} Page</h1>
      <!-- <iframe " /> -->
      <iframe
        width="640"
        height="370"
        src="https://www.youtube.com/embed/_9rcdwvXYHs"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <!-- <h1>This is {{ this.$route.params.price }} Page</h1> -->
      <!-- "https://youtu.be/_9rcdwvXYHs" -->
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  computed: {},
  methods: {},
  created() {
    let key = this.$store.state.tricks;
    let idTr = this.$route.params.id;
    console.log(idTr, "hh");
    console.log(key);
    this.product = key.filter((el) => el.id === idTr)[0];
    console.log(this.product);
  },
};
// this.$store.dispatch("getItems", id);
// this.product = this.tricks.id;
// console.log(this.displayedTricks.id);
// dispatch to get that specific item by id
// from the db or from the array of items that you have in the store
// this.product = the thing you got
</script>

<style></style>
