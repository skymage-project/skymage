<template>
<div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="open()"></v-app-bar-nav-icon>
    </v-app-bar>
            <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/test">Test</router-link>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
     //collapseOnScroll: true,
      drawer: false,
      group: null,
    };
  },
  methods:{
    open(){
      this.$store.dispatch('OPEN_DRAWER')
    }
  },
   watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>