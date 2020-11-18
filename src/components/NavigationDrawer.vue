<template>
    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/test">Test</router-link>
    </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
  computed:{
      drawer: {
        get () { return this.$store.state.drawer },
        set (v) {return this.$store.commit('SET_DRAWER', v)}
      }
  }
};
</script>
