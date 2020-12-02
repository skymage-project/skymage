<template>
  <v-app>
    <div>
      <NavBar />
      <router-view />
      <Footer />
    </div>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({}),
};
</script>
