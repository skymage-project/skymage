<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="12">
        <v-card class="pa-2" outlined tile>
          <v-row no-gutters>
            <v-col cols="12"
              ><h2>
                helloddddddddddddddddddddddddddddddddddssss
              </h2></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6" sm="6" md="6">
        <v-card class="pa-3" outlined tile>
          <v-row no-gutters>
            <v-col cols="12"
              ><h2>
                helloddddddddddddddddddddddddddddddddddssss
              </h2></v-col
            >
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="6">
        <v-card class="pa-3" outlined tile>
          <v-row no-gutters>
            <v-col cols="12"
              ><h2>
                helloddddddddddddddddddddddddddddddddddssss
              </h2></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
