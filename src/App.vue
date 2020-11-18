<template>
  <div>
    <NavBar/>
    <NavigationDrawer/>
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
    //
  }),
};
</script>