<template>
  <div>
    <v-app-bar id="nav" :dark="goDark">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-items>
        <v-btn @click="goHome">Welcome To SkyMage</v-btn>
        <v-btn text @click="goAbout"> <span class="span">About</span></v-btn>
        <v-btn text @click="goCatalog"> <span class="span">Tricks</span></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn text @click="profile" v-if="loggedIn"> <span class="span">Profile</span></v-btn>
      <v-btn text @click="logOut" v-if="loggedIn"> <span class="span">Logout</span></v-btn>

      <v-btn text @click="goSignin" v-else> <span class="span">Signin</span></v-btn>
      <v-btn @click="toggleShowCart">
        <v-badge left color="warning">
          <span slot="badge">{{ cartItemsLength }}</span>
          <v-icon>fas fa-shopping-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary absolute left width="200" id="drawer">
      <v-btn text @click="search('Beginners')">Beginners</v-btn>
      <v-btn text @click="search('Close Up')">Close Up</v-btn>
      <v-btn text @click="search('Cards')">Cards</v-btn>
      <v-btn text @click="search('Coins')">Coins</v-btn>
      <v-btn text @click="search('Mental')">Mental</v-btn>
      <v-btn text @click="search('BigShows')">BigShows</v-btn>
      <v-btn text @click="search('DvD')">DvD</v-btn>
      <v-btn text @click="search('Books')">Books</v-btn>
      <v-btn text @click="search('Playing Cards')">Playing Cards</v-btn>
      <v-btn text @click="search('Accessories')">Accessories</v-btn>
      <v-btn text @click="search('Promotion')">Promotion</v-btn>
    </v-navigation-drawer>
    <div v-if="showCart">
      <Cart @my-click-outside="toggleShowCart" />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Cart from "./Cart";
export default {
  name: "NavBar",
  components: { Cart },
  data() {
    return {
      route: "/",
      drawer: null,
      goDark: true,
      showCart: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.initialState.status.loggedIn;
    },
    ...mapState(["cart"]),
    ...mapGetters(["cartItemsLength"]),
  },
  methods: {
    profile() {
      if (this.route === "/profile") {
        return;
      }
      this.$router.push("/profile");
      this.route = "/profile";
    },
    toggleShowCart(val) {
      this.showCart = !this.showCart;
    },
    logOut() {
      this.$store.dispatch("logout").then(() => {
        // if (this.route === '/' ) {
        // 	return;
        // }
        this.$router.push("/");
      });
    },
    goHome() {
      if (this.route === "/") {
        return;
      }
      this.$router.push("/");
      this.route = "/";
    },
    goCatalog() {
      if (this.route === "/catalog") {
        return;
      }
      this.$router.push("/catalog");
      this.route = "/catalog";
    },
    goAbout() {
      if (this.route === "/about") {
        return;
      }
      this.$router.push("/about");
      this.route = "/about";
    },
    goSignin() {
      this.$router.push("/signin");
    },
    search(event) {
      if (this.route === "/catalog") {
        this.$store.dispatch("filterBy", event);
      } else {
        const me = this;
        this.$router.push("/catalog").then(() => {
          me.route = "/catalog";
          me.$store.dispatch("filterBy", event);
        });
      }
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.span {
  color: orange;
}
#nav {
  background-color: #1e1e1e;
}
</style>
