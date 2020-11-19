<template>
    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
        <div>sdfsdfsd</div>
    </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
  computed:{
      drawer: {
      get () { return this.$store.state.drawer },
      set () {() => null}
      }
  }
};
</script>
