<template>
  <div>
    <div v-if="!check">
      <v-row class="mb-6" no-gutters>
        <v-col sm="5" md="6">
          <a href="http://localhost:8080">SKYMAGE</a>
          <h2>Contact information</h2>
          Already have an account?<a href="http://localhost:8080/signin">Log in</a>
          <v-form ref="registerForm" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="firstName" label="First Name" :rules="[rules.required]" maxlength="20" solo-inverted required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="lastName" label="Last Name" :rules="[rules.required]" maxlength="20" solo-inverted required></v-text-field>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-text-field v-model="email" :rules="emailRules" label="email" solo-inverted required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1" solo-inverted></v-text-field>
                  <Password v-model="password" :strength-meter-only="true" />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1" solo-inverted></v-text-field>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-text-field v-model="dateOfBirth" type="date" :rules="[rules.required]" label="Date Of Birth" solo-inverted required></v-text-field>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-text-field v-model="company" label="company(optional)" solo-inverted></v-text-field>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-text-field v-model="address" label="address" :rules="[rules.required]" solo-inverted required></v-text-field>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-text-field v-model="addressOptional" label="Apartement,suite,etc.(optional)" solo-inverted required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="postalCode" label="postal code" solo-inverted :rules="[rules.required]" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="city" label="city" solo-inverted :rules="[rules.required]" required></v-text-field>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-select v-model="country" :items="countries" :rules="[rules.required]" label="Country" solo-inverted required></v-select>
                </v-col>

                <v-col cols="24" sm="12">
                  <v-text-field v-model="phoneNumber" :rules="[rules.required]" label="Phone Number" maxlength="12" solo-inverted required></v-text-field>
                </v-col>
              </v-row>

              <v-btn x-large :disabled="!valid" color="#737373" @click="register">Register</v-btn>
            </v-container>
          </v-form>
        </v-col>
        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
          <CartItemList />
          <h3>Subtotal : {{ getTotalCartPrice }} DT</h3>
          <h3>
            Shipping :
            <p>Calculated at next step</p>
          </h3>
          <hr />
          <h3>Total : {{ getTotalCartPrice }} DT</h3>
          <v-btn x-large color="warning" @click="goToCompleteThePurchase">Continue The Shipping</v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-if="check">
      <Shipping />
    </div>
  </div>
</template>

<script>
import Password from "vue-password-strength-meter";
import Shipping from "./Shipping";
import CartItemList from "./CartItemList";
import { mapState, mapGetters } from "vuex";
export default {
  components: { CartItemList, Password, Shipping },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalCartPrice"]),
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  data: () => ({
    valid: true,
    check: false,
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Canada",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      `Timor L'Este`,
      "Togo",
      "Tonga",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
    company: "",
    address: "",
    postalCode: "",
    city: "",
    addressOptional: "",
    show1: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    dateOfBirth: "",
    phoneNumber: "",
    country: "",
    emailRules: [(v) => !!v || "Required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
  methods: {
    register() {
      if (this.$refs.registerForm.validate()) {
        this.$store
          .dispatch("register", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            dateOfBirth: this.dateOfBirth,
            phoneNumber: this.phoneNumber,
            country: this.country,
            company: this.company,
            address: this.address,
            postalCode: this.postalCode,
            city: this.city,
            addressOptional: this.addressOptional,
          })
          .then(() => {
            this.$router.push("/signin");
          });
      }
    },
    goToCompleteThePurchase() {
      return (this.check = !this.check);
    },
  },
};
</script>

<style l Cartang="scss" scoped></style>
