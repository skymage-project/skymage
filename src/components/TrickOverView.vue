<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="showDiv"
      persistent
      max-width="1000"
      @click:outside="toggleOverView"
    >
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="8">
            <v-card class="pa-2" outlined tile>
              <v-row no-gutters>
                <v-col cols="12" sm="12" md="12">
                  <v-carousel style="height:370px">
                    <v-carousel-item
                      v-for="item in trick.urlPictures"
                      :key="item.id"
                      v-html="getiframe(item.urlPictures)"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                      style="height:370px"
                    ></v-carousel-item> </v-carousel
                ></v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-layout align-start justify-end fill-height>
                    <v-card
                      v-for="item in trick.urlPictures"
                      :key="item.id"
                      class="pa-2"
                      width="25%"
                    >
                      <v-img
                        height="120px"
                        v-html="getiframeDown(item.urlPictures)"
                      />
                    </v-card> </v-layout
                ></v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6" md="4">
            <v-card class="pa-2" outlined tile>
              <v-layout fill-height>
                <v-row>
                  <v-col cols="12"
                    ><h1 class="titleV">
                      {{ trick.name }}
                    </h1></v-col
                  >

                  <v-col cols="12"
                    ><h3 class="text">
                      {{ trick.quickDescription }}
                    </h3></v-col
                  >
                  <v-col cols="12"></v-col>

                  <v-col cols="7">
                    <v-btn
                      color="orange lighten-2"
                      class="buttonV"
                      @click="
                        toggleOverView();
                        openFull();
                      "
                      >View Full Page</v-btn
                    ></v-col
                  >

                  <v-col cols="5"
                    ><h1 class="price">{{ trick.price }} $</h1></v-col
                  >

                  <v-col cols="2"
                    ><v-btn icon class="plus-cart-trick" @click="addItemToCart">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn></v-col
                  >
                  <v-col cols="2">
                    <v-btn icon>
                      <v-icon
                        >mdi-numeric-{{
                          getItemQuantity(trick.id)
                        }}-circle-outline</v-icon
                      >
                    </v-btn>
                  </v-col>
                  <v-col cols="2"
                    ><v-btn icon @click="decreaseQuantity">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn></v-col
                  >
                  <v-col cols="3"
                    ><v-btn icon @click="removeItemFromCart">
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn></v-col
                  >
                  <v-col cols="6"></v-col>
                  <v-col cols="6"
                    ><v-btn
                      color="orange lighten-2"
                      class="buttonV"
                      @click="
                        addItemToCart();
                        toggleOverView();
                      "
                      >Add To Cart</v-btn
                    ></v-col
                  >
                </v-row>
              </v-layout>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </v-layout>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import OnetrickFullPage from "./OnetrickFullPage.vue";
export default {
  components: { OnetrickFullPage },
  props: ["showDiv", "trick"],
  name: "TrickOverView",
  computed: {
    ...mapState(["displayedTricks", "cart"]),
    ...mapGetters(["getItemQuantity"]),
  },
  data() {
    return {
      show: false,
      full: true,
    };
  },
  methods: {
    toggleOverView() {
      this.$emit("toggle-over-view");
    },
    openFull() {
      // this.full = true;
      this.$router.push("/cards");
    },
    bindImg() {},
    addItemToCart() {
      let quantity = this.trick.quantity + 1;
      let item = {
        id: this.trick.id,
        name: this.trick.name,
        picture: this.trick.picture,
        price: this.trick.price,
        quantity: quantity,
      };
      this.$store.dispatch("addToCart", item);
    },
    decreaseQuantity() {
      let quantity = this.trick.quantity - 1;
      let item = {
        id: this.trick.id,
        name: this.trick.name,
        picture: this.trick.picture,
        price: this.trick.price,
        quantity: quantity,
      };
      this.$store.dispatch("decreaseQuantity", item);
    },
    removeItemFromCart() {
      this.$store.dispatch("removeFromCart", this.trick.id);
    },
    getiframe(url) {
      if (url.includes("www.youtube.com")) {
        return `<iframe width="640" height="370" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else {
        return `<img width="600" height="370" src="${url}"/>`;
      }
    },
    getiframeDown(url) {
      return `<img width="120px" height="120px" src="${url}"/>`;
    },
  },
};
</script>
<style scoped>
.price {
  position: relative;
  top: -0.5vw;
}
</style>
