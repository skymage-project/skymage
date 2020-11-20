<template>
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
</template>

<script>
export default {
    name:"NavigationDrawer",
  data: () => ({}),
  computed:{
      drawer: {
      get () { return this.$store.state.drawer },
      set () {() => null}
      }
  }
};
</script>
