<template>
  <OnetrickFullPage />
</template>
<script>
import OnetrickFullPage from "../components/OnetrickFullPage.vue";
// import { mapState } from "vuex";
export default {
  name: "Catalog",
  components: {
    OnetrickFullPage,
  },
  //   computed: {
  //     ...mapState(["displayedTricks"]),
  //   },
  //   created() {
  //     this.$store.dispatch("getItems");
  //   },
};
</script>

<style scoped></style>
