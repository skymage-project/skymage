<template>
<div>
            <v-app-bar id="nav" :dark="goDark">
    <v-app-bar-nav-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    <span @click ="goHome"><v-toolbar-title > Welcome To SkyMage</v-toolbar-title></span>
    
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text @click ="goAbout">  <span class="span">About</span></v-btn>
      <v-btn text @click ="goTest">  <span class="span">Tricks</span></v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn text @click ="goSignin">  <span class="span">Signin</span></v-btn>
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
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer:null,
    goDark: true
    };
  },
  methods:{
    open(){
      this.$store.dispatch('OPEN_DRAWER')
    },
    goHome(){ 
      this.$router.push('/')
    },
    goTest(){
      this.$router.push('/test')
    },
    goAbout(){
      this.$router.push('/about')
    },
    goSignin() {
      this.$router.push("/signin")
    }
  },
   watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>

<style scoped>
.span{
  color:orange;
}
#nav{
  background-color: #1E1E1E;
}
</style>