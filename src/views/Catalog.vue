<template>
  <div>
    <TricksFilter />
    <v-container>
      <v-row no-gutters style="height: 150px; row-gap: 2em">
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
  created() {
    this.$store.dispatch("fetchTricks");
  },
  computed: {
    ...mapState(["displayedTricks"]),
  },
  data: () => ({
    show: {},
    key: 0,
  }),
  methods: {
    showByIndex(e) {
      this.show[e.target.id] = !this.show[e.target.id];
      this.key++;
    },
  },
};
</script>

<style scoped></style>
