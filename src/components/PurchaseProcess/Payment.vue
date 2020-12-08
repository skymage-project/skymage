<template>
  <div>
    <div v-if="!check">
      <v-row class="mb-6" no-gutters>
        <v-col sm="5" md="6">
          <h2>Payment</h2>
          <p>All transactions are secure and encrypted</p>
          <v-form ref="paymentForm" v-model="valid" lazy-validation>
            <v-card>
              <v-card-title class="blue darken-1 white--text font-weight-black title">
                PAYMENT<br />
                DETAILS<v-spacer></v-spacer>

                <v-img
                  aspect-ratio="3.075"
                  max-height="40"
                  :src="URL_IMAGE"
                  position="right"
                  contain
                />
              </v-card-title>

              <v-card-text class="pb-10">
                <v-row>
                  <v-col cols="6">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader"
                      >CARDHOLDER’S NAME</v-subheader
                    >
                    <v-text-field
                      single-line
                      :value="user.firstName + ' ' + user.lastName"
                      :rules="[rules.required]"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader"
                      >CARD NUMBER</v-subheader
                    >
                    <v-text-field
                      single-line
                      outlined
                      mask="credit-card"
                      @keypress="isNumber($event)"
                      v-model="creditCardNumber"
                      :rules="[rules.required, rules.minCard]"
                      maxlength="16"
                      hide-
                    />
                  </v-col>

                  <v-col col="4">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader"
                      >EXPIRY DATE</v-subheader
                    >
                    <vue-monthly-picker class="picker" v-model="expirationCardDate">
                    </vue-monthly-picker>
                  </v-col>

                  <v-col col="4">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader"
                      >CVV2</v-subheader
                    >
                    <v-text-field
                      single-line
                      outlined
                      @keypress="isNumber($event)"
                      v-model="securityCode"
                      :rules="[rules.required, rules.minCvv]"
                      maxlength="4"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-form>

          <v-btn color="warning" :disabled="!valid" @click="Payment">Pay Now</v-btn>
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
      <PurchaseDone :selected="selected" :shippingRate="shippingRate" />
    </div>
  </div>
</template>

<script>
import PurchaseDone from "./PurchaseDone.vue";
import CartItemList from "./CartItemList.vue";
import VueMonthlyPicker from "vue-monthly-picker";
import { mapState, mapGetters } from "vuex";
export default {
  props: ["selected", "shippingRate"],
  components: { CartItemList, PurchaseDone, VueMonthlyPicker },
  computed: {
    ...mapState(["cart", "users"]),
    ...mapGetters(["getTotalCartPrice"]),
    loggedIn() {
      return this.users.initialState.status.loggedIn;
    },
    user() {
      return this.users.initialState.user;
    },
  },
  data: () => ({
    valid: true,
    check: false,
    URL_IMAGE: "https://i.imgur.com/lY1wk82.png",
    creditCardNumber: null,
    expirationCardDate: null,
    securityCode: null,
    rules: {
      required: (value) => !!value || "Required.",
      minCard: (v) => (v && v.length >= 16) || "Min 16 characters",
      minCvv: (v) => (v && v.length >= 3) || "Min 3 digits",
    },
  }),
  methods: {
    Payment() {
      this.$store.dispatch("invoice", {
        items: this.cart.itemsToCart,
        shippingRate: this.shippingRate,
        getTotalCartPrice: this.getTotalCartPrice,
      });
      this.$store
        .dispatch("updatePurchase", {
          id: this.user.id,
          creditCardNumber: this.creditCardNumber,
          expirationCardDate: this.expirationCardDate._i,
          securityCode: this.securityCode,
          shippingRate: this.shippingRate,
        })
        .then(() => {
          this.check = !this.check;
        });
    },
    isNumber: (evt) => {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 46 || 110)
        ? evt.preventDefault()
        : true;
    },
  },
};
</script>

<style scoped>
.picker {
  color: black;
  font-weight: bold;
  background-color: darkturquoise;
}
</style>
