<template>
  <div>
    <v-app-bar :dark="goDark">
      <v-switch :label="`Dark Theme`" v-model="goDark"></v-switch>
    <v-app-bar-nav-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    <v-toolbar-title>Welcome To SkyMage</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text> <router-link to="/">Home</router-link></v-btn>
      <v-btn text>  <router-link to="/about">About</router-link></v-btn>
      <v-btn text>  <router-link to="/test">Tricks</router-link></v-btn>
    </v-toolbar-items>
  </v-app-bar>
  
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "200"
      id = "drawer"
    >
    <v-btn text>Beginners |</v-btn>
    <v-btn text>Close Up</v-btn>
    <v-btn text>Cards |</v-btn>
    <v-btn text>Coins |</v-btn>
    <v-btn text>Mental |</v-btn>
    <v-btn text>BigShows |</v-btn>
    <v-btn text>DvD |</v-btn>
    <v-btn text>Books |</v-btn>
    <v-btn text>Playing Cards |</v-btn>
    <v-btn text>Accessories |</v-btn>
    <v-btn text>Promotion |</v-btn>
    </v-navigation-drawer>
    <router-view/>
  </div>
</template>


<script>
import NavBar from './components/NavBar';
import NavigationDrawer from './components/NavigationDrawer';
export default {
  name: 'App',
  components: {
     NavBar,
     NavigationDrawer
  },
  data: () => ({
    drawer:null,
    goDark: false
  }),
};
</script>