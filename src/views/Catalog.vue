<template>
  <div>
    <Filter />
    <v-container class="grey lighten-5 mb-6">
      <v-row no-gutters style="height: 150px; row-gap: 2em">
        <Item v-for="trick in tricks" :key="trick.id" :trick="trick" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import Filter from "../components/Filter.vue";
import { mapState } from "vuex";
export default {
  components: {
    Item,
    Filter
  },
  created() {
    this.$store.dispatch("fetchTricks");
  },
  computed: {
    ...mapState(["tricks"]),
  },
  data: () => ({
    show: {},
    goDark: true,
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
