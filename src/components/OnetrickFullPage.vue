<template>
  <v-parallax
    dark
    src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700416024.jpg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-container fill-height> </v-container>
      </v-col>
      <!-- <v-col cols="6"> {{ displayedTricks.price }} </v-col> -->
      <h1>This is {{ this.product.name }} Page</h1>

      <!-- <h1>This is {{ this.$route.params.price }} Page</h1> -->
    </v-row>
  </v-parallax>
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
