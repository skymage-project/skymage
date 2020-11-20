<template>
<v-app>
<div>
  <NavBar />
  <!-- <Catalog /> -->
  <router-view />
</div>
</v-app>

</template>
<script>

import NavBar from './components/NavBar';
// import Catalog from './components/Catalog'
export default {
  name: 'App',
  components: {
     NavBar,
    //  Catalog
  },
  data: () => ({
  }),
};
</script>

<style scoped>
</style>