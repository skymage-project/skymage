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
  </div>
</template>

<script>
export default {
  name: "TricksFilter",
  data: () => ({
    items: [
      "price: decreasing order",
      "price: increasing order",
      "bestsellers",
    ],
    itemDifficulty: ["Beginner", "Intermediate", "Advanced"],
  }),
  methods: {
    search(event) {
      this.$store.dispatch("filterBy", event);
    },
  },
};
</script>
<style></style>
