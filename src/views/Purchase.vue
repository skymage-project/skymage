<template>
  <div>
    <a href="http://localhost:8080">SKYMAGE</a>
    <h2>Contact information</h2>
    Already have an account?<a href="http://localhost:8080/signin">Log in</a>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="first" label="First Name" solo-inverted required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="last" label="Last Name" solo-inverted required></v-text-field>
          </v-col>

          <v-col cols="24" sm="12">
            <v-text-field v-model="company" label="company(optional)" solo-inverted></v-text-field>
          </v-col>

          <v-col cols="24" sm="12">
            <v-text-field v-model="Adress" label="Adress" solo-inverted required></v-text-field>
          </v-col>

          <v-col cols="24" sm="12">
            <v-text-field v-model="Apartement" label="Apartement,suite,etc.(optional)" solo-inverted required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="postalCode" label="postal code" solo-inverted required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="city" label="city" solo-inverted required></v-text-field>
          </v-col>

          <v-col cols="24" sm="12">
            <v-select v-model="country" :items="countries" label="country/region" solo-inverted required></v-select>
          </v-col>

          <v-col cols="24" sm="12">
            <v-text-field v-model="phone" label="phone" solo-inverted required></v-text-field>
          </v-col>
        </v-row>

        <v-btn color="warning" @click="continueToShipping"> Continue to shipping </v-btn>
      </v-container>
    </v-form>
    <CartItemList />
  </div>
</template>

<script>
import CartItemList from "../components/CartItemList";
import { mapState } from "vuex";
export default {
  components: { CartItemList },
  computed: {
    ...mapState(["cart"]),
  },
  data: () => ({
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
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
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
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
      "Saint Pierre &amp; Miquelon",
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
      "St Kitts &amp; Nevis",
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
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
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
    first: "",
    last: "",
    company: "",
    Adress: "",
    Apartement: "",
    postalCode: "",
    city: "",
    country: "",
    phone: "",
  }),
};
</script>

<style l Cartang="scss" scoped></style>
