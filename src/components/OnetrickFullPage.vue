<template>
  <div>
    <v-container class="dark">
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-row no-gutters>
            <v-col cols="12"
              ><h3 class="quickDesc">
                {{ this.product.quickDescription }}
              </h3></v-col
            >
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="7" sm="3" md="7">
          <v-col cols="12"> </v-col>
          <v-col cols="12"> </v-col>
          <v-col cols="12"> </v-col>
          <v-col cols="12"> </v-col>
          <v-col cols="12"> </v-col>
          <v-row>
            <v-col cols="12">
              <iframe
                width="640"
                height="370"
                :src="this.product.urlVideos[0].urlVideos"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="5" sm="5" md="5">
          <v-row no-gutters>
            <v-col cols="5"
              ><h1>{{ this.product.name }}</h1>
              <h3 style="color: orange">
                {{ this.product.author }}
              </h3>
            </v-col>
          </v-row>

          <v-col cols="12"> </v-col>

          <v-row no-gutters>
            <v-col cols="12">
              <p class="descriptionCss">
                {{ this.product.description.descriptionText }}
              </p>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3"
              ><v-btn class="orange">
                Add To Cart
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
    </v-container>

    <About />
  </div>
</template>

<script>
import About from "../components/Hompage/About";
export default {
  components: { About },
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

<style scoped>
.descriptionCss {
  position: relative;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  top: -2em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 17px;
}
</style>
