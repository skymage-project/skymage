<template>
  <div>
    <h3>Thank you Mr/Mrs {{ firstName }} {{ lastName }} for purshasing from us the products your total is {{ getTotalCartPrice + selected }} DT</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: ["selected", "firstName", "lastName"],
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalCartPrice"]),
  },
};
</script>

<style></style>
