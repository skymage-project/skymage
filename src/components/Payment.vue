<template>
  <div>
    <div v-if="!check">
      <v-row class="mb-6" no-gutters>
        <v-col sm="5" md="6">
          <h2>Payment</h2>
          <p>All transactions are secure and encrypted</p>
          <v-card>
            <v-card-title class="blue darken-1 white--text font-weight-black title">
              PAYMENT<br />
              DETAILS<v-spacer></v-spacer>

              <v-img aspect-ratio="3.075" max-height="40" :src="URL_IMAGE" position="right" contain />
            </v-card-title>

            <v-card-text class="pb-10">
              <v-row>
                <v-col cols="6">
                  <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CARDHOLDER’S NAME</v-subheader>
                  <v-text-field single-line :rules="[rules.required]" outlined maxlength="19  " />
                </v-col>

                <v-col cols="6">
                  <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CARD NUMBER</v-subheader>
                  <v-text-field single-line outlined mask="credit-card" :rules="[rules.required]" v-model="valueOfCardNumber" hide-details />
                </v-col>

                <v-col col="4">
                  <v-subheader class="grey--text text--lighten-1 pl-0 subheader">EXPIRY DATE</v-subheader>
                  <v-select :items="MonthList" label="Month" :rules="[rules.required]" outlined />
                </v-col>

                <v-col col="4">
                  <v-subheader class="grey--text text--lighten-1 pl-0 subheader"></v-subheader>
                  <v-select :items="YearList" label="Year" :rules="[rules.required]" outlined />
                </v-col>

                <v-col col="4">
                  <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CVV</v-subheader>
                  <v-text-field single-line outlined v-model="cvv" type="text" :rules="[rules.required]" maxlength="3" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-btn color="warning" @click="Payment">Pay Now</v-btn>
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
      <PurchaseDone :selected="selected" :firstName="firstName" :lastName="lastName" />
    </div>
  </div>
</template>

<script>
import PurchaseDone from "../components/PurchaseDone";
import CartItemList from "../components/CartItemList";
import { mapState, mapGetters } from "vuex";
export default {
  props: ["selected", "firstName", "lastName"],
  components: { CartItemList, PurchaseDone },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalCartPrice"]),
  },
  data: () => ({
    check: false,
    URL_IMAGE: "https://i.imgur.com/lY1wk82.png",
    YearList: ["2021", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"],
    MonthList: ["January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"],
    valueOfCardNumber: null,
    cvv: null,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v && v.length >= 8,
    },
  }),
  methods: {
    Payment() {
      this.check = !this.check;
    },
  },
};
</script>

<style></style>
