<template>
  <div>
    <h3>Thank you Mr/Mrs {{ user.firstName + " " + user.lastName }} for purshasing from us the products your total is {{ getTotalCartPrice + selected }} DT and it was your method of shipping is {{ shippingRate }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: ["selected", "shippingRate"],
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalCartPrice"]),
    loggedIn() {
      return this.$store.state.initialState.status.loggedIn;
    },
    user() {
      return this.$store.state.initialState.user;
    },
  },
};
</script>

<style></style>
