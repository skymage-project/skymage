<template>
  <div>
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <h2>this is payment</h2>
        <v-btn color="warning" @click="Payment">Pay Now</v-btn>
        <a href="http://localhost:8080/shipping"> return to shipping</a>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <CartItemList />
        <h3>Subtotal : {{ getTotalCartPrice }} DT</h3>
        <br />
        <h3>
          Shipping :
          <p>{{ selected }} DT</p>
        </h3>
        <br />
        <hr />
        <br />
        <h3>Total : {{ getTotalCartPrice + selected }} DT</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CartItemList from "../components/CartItemList";
import { mapState, mapGetters } from "vuex";
export default {
  props: ["selected"],
  components: { CartItemList },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalCartPrice"]),
  },
  data: () => ({
    check: null,
  }),
  methods: {
    Payment() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
