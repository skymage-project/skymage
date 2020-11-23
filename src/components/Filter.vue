<template>
  <div>
    <h2>product to buy</h2>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Order By" @change="search"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="itemDifficulty"
            label="Difficulty"
            @change="search"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <v-col v-for="trick in filtred" :key="trick.id">
        <v-card class="mx-auto" max-width="344">
          <v-img height="150px" :src="trick.urlPictures">
            <!-- url image -->
          </v-img>

          <v-card-title>
            <!-- NameTrick -->
            {{ trick.name }}
          </v-card-title>
          <v-card-subtitle>
            <!-- price  -->
            {{ trick.price }}
          </v-card-subtitle>

          <v-card-subtitle>
            <!-- QuickDescription -->
            {{ trick.quickDescription }}
          </v-card-subtitle>

          <v-card-actions transition="fade-transition">
            <v-btn color="orange lighten-2" text> Read More </v-btn>
            <!-- <v-btn color="orange lighten-2" v-if="hover">Add To Cart</v-btn> -->
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon :id="trick.id"> </v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition> </v-expand-transition>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchTricks").then(() => {
      this.filtred = this.tricks.slice();
    });
  },
  data: () => ({
    items: [
      "price: decreasing order",
      "price: increasing order",
      "bestsellers",
    ],
    itemDifficulty: ["Easy", "Intermediate", "Hard"],
    filtred: [],
  }),
  computed: {
    ...mapState(["tricks"]),
  },
  methods: {},
};
</script>
<style></style>
