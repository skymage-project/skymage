<template>
  <div>
    <div v-if="!check">
      <v-row class="mb-6" no-gutters>
        <v-col sm="5" md="6" style="padding-left: 25px">
          <div v-if="!loggedIn">
            <h2>Contact information</h2>
            <br />
            <h3>
              Already have an account? Login from here, or please create an
              <a href="/signin" style="color: 'orange'">account</a>
            </h3>
            <br />
            <v-form ref="loginForm" v-model="valid" lazy-validation>
              <v-col cols="6">
                <v-text-field
                  v-model="loginEmail"
                  :rules="loginEmailRules"
                  label="E-mail"
                  solo-inverted
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="loginPassword"
                  :append-icon="show1 ? 'eye' : 'eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                  solo-inverted
                ></v-text-field>
                <v-btn x-large :disabled="!valid" color="warning" @click="Login">
                  Login
                </v-btn>
              </v-col>
            </v-form>
          </div>
          <br />
          <div>
            <h3>Please fill out the shipping form</h3>
            <v-form ref="registerForm" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col cols="24" sm="12">
                    <v-text-field
                      :rules="emailRules"
                      label="Email"
                      v-model="email"
                      solo-inverted
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="24" sm="12">
                    <v-text-field
                      v-model="company"
                      label="Company (optional)"
                      solo-inverted
                    ></v-text-field>
                  </v-col>

                  <v-col cols="24" sm="12">
                    <v-text-field
                      v-model="address"
                      label="Address"
                      :rules="[rules.required]"
                      solo-inverted
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="24" sm="12">
                    <v-text-field
                      v-model="addressOptional"
                      label="Apartment, suite, etc. (optional)"
                      solo-inverted
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="postalCode"
                      label="Postal code"
                      solo-inverted
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="city"
                      label="City"
                      solo-inverted
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-btn
                  x-large
                  :disabled="!valid"
                  color="warning"
                  @click="goToCompleteThePurchase"
                  >Continue The Shipping</v-btn
                >
              </v-container>
            </v-form>
          </div>
        </v-col>
        <v-col sm="5" offset-sm="2" md="6" offset-md="0" width="30%">
          <CartItemList />
          <h3>Subtotal : {{ getTotalCartPrice }} DT</h3>
          <h3>Shipping : Calculated at next step</h3>
          <hr />
          <h3>Total : {{ getTotalCartPrice }} DT</h3>
        </v-col>
      </v-row>
    </div>
    <div v-if="check">
      <Shipping />
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Password from "vue-password-strength-meter";
import Shipping from "./Shipping.vue";
import CartItemList from "./CartItemList.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: { CartItemList, Password, Shipping },
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
    company: "",
    address: "",
    postalCode: "",
    city: "",
    addressOptional: "",
    show1: false,
    email: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
  created() {
    this.email = this.user === null ? "" : this.user.email;
    this.city = this.user === null ? "" : this.user.city;
    this.company = this.user === null ? "" : this.user.company;
    this.address = this.user === null ? "" : this.user.address;
    this.addressOptional = this.user === null ? "" : this.user.addressOptional;
    this.postalCode = this.user === null ? "" : this.user.postalCode;
  },
  methods: {
    goToCompleteThePurchase() {
      if (!this.loggedIn) {
        Swal.fire({
          icon: "error",
          title: "You need to create an account first",
        });
        return;
      }
      if (this.$refs.registerForm.validate()) {
        this.$store
          .dispatch("updateRegister", {
            email: this.email,
            company: this.company,
            address: this.address,
            postalCode: this.postalCode,
            city: this.city,
            addressOptional: this.addressOptional,
          })
          .then(() => {
            return (this.check = !this.check);
          });
      }
    },
    Login() {
      if (this.$refs.loginForm.validate()) {
        this.$store.dispatch("login", {
          email: this.loginEmail,
          password: this.loginPassword,
        });
        return (this.check = !this.check);
      }
    },
  },
};
</script>

<style l Cartang="scss" scoped>
.v-form {
  width: 75%;
}
a:link {
  color: orange;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: orange;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: orange;
  background-color: transparent;
  text-decoration: underline;
}
a:active {
  color: orange;
  background-color: transparent;
  text-decoration: underline;
}
</style>
