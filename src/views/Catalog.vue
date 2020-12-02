<template>
  <div>
    <TricksFilter />
    <v-container inline>
      <v-row style="row-gap: 2em">
        <Item v-for="trick in displayedTricks" :key="trick.id" :trick="trick" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import TricksFilter from "../components/TricksFilter.vue";
import { mapState } from "vuex";
export default {
  name: "Catalog",
  components: {
    Item,
    TricksFilter,
  },
  computed: {
    ...mapState(["displayedTricks"]),
  },
  created() {
    this.$store.dispatch("getItems");
  },
};
</script>

<style scoped></style>
