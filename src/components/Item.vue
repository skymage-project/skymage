<template>
  <v-card
    class="mx-auto"
    width="23%"
    height="380px"
    @mouseover="toggleHover"
    @mouseout="toggleHover"
  >
    <v-img height="150px" :src="trick.urlPictures[0].urlPictures">
      <v-btn icon @click="addtToWishlist">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-img>
    <v-card-text class="pt-4" style="position:relative;">
      <v-btn
        absolute
        color="orange"
        class="white--text"
        fab
        small
        right
        top
        @click="addToCart"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-title>
      <!-- NameTrick -->
      {{
        trick.name.length > 20 ? trick.name.slice(0, 18) + "..." : trick.name
      }}
    </v-card-title>
    <v-card-subtitle>
      <!-- category  -->
      {{ trick.category }}
    </v-card-subtitle>
    <v-card-subtitle>
      <!-- price  -->
      {{ trick.price }}DT
    </v-card-subtitle>

    <v-btn class="buttonQuick" color="orange " v-show="hover" @click="showD"
      >Quick View</v-btn
    >

    <TrickOverView
      :trick="trick"
      :showDiv="showDiv"
      @toggle-over-view="showD"
    />
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import TrickOverView from "./TrickOverView";
export default {
  components: { TrickOverView },

  props: ["trick"],
  data() {
    return {
      show: false,
      hover: false,
      showDiv: false,
    };
  },
  computed: {
    userId() {
      return this.$store.state.initialState.user.id;
    },
  },
  methods: {
    showByIndex(e) {
      this.show[e.target.id] = !this.show[e.target.id];
      this.key++;
    },
    addToCart() {
      let item = {
        id: this.trick.id,
        name: this.trick.name,
        picture: this.trick.urlPictures[0].urlPictures,
        price: this.trick.price,
        quantity: 1,
      };
      this.$store.dispatch("addToCart", item);
    },
    toggleHover() {
      this.hover = !this.hover;
    },
    showByIndex(e) {
      this.show = !this.show;
    },
    addtToWishlist() {
      let addWish = { UserId: this.userId, ItemId: this.trick.id };
      this.$store.dispatch("addToWishList", {
        UserId: this.userId,
        ItemId: this.trick.id,
      });
    },
    showD() {
      this.showDiv = !this.showDiv;
    },
  },
};
</script>

<style scoped>
.buttonQuick {
  position: relative;
  left: 8em;
  top: -1em;
}
</style>
