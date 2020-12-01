<template>
  <div>
    <div v-if="!check">
      <v-row class="mb-6" no-gutters>
        <v-col sm="5" md="6">
          <h2>this is shipping</h2>
          <v-radio-group v-model="selected" mandatory>
            <v-radio label="Free Shipping" :value="0"></v-radio>
            <v-radio label="Flat Rate" :value="9"></v-radio>
          </v-radio-group>
          <v-btn color="warning" @click="goToPayment">Continue To payment</v-btn>
          <a href="http://localhost:8080/purchase"> return to purchase</a>
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
    <div v-if="check">
      <Payment :selected="selected" />
    </div>
  </div>
</template>

<script>
import CartItemList from "../components/CartItemList";
import Payment from "../components/Payment";
import { mapState, mapGetters } from "vuex";
export default {
  components: { CartItemList, Payment },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalCartPrice"]),
  },
  data: () => ({
    radios: null,
    selected: null,
    check: false,
  }),
  methods: {
    goToPayment() {
      this.check = !this.check;
    },
  },
};
</script>

<style></style>
