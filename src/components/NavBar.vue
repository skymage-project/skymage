    <!-- <div>
        <header class='nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec'>
            <div class='container-fluid desktop-nav'>
                <div class='row'>
                    <div class='col-sm-2'>
                        <div class='logo-area'>
                            <a href = '#'>
                                <img src='//' alt='logo' class='img-fluid'>
                            </a>
                    </div>
                </div>
    </div>
</template> -->

<!-- export default !;
</script> -->

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      collapseOnScroll: true,
    };
  },
};
</script>

<template>
  <div id='app'>
    <v-app id='inspire'>
      <v-card class='overflow-hidden'>
        <v-app-bar
          :collapse='!collapseOnScroll'
          :collapse-on-scroll='collapseOnScroll'
          absolute
          color='deep-purple accent-4'
          dark
          scroll-target='#scrolling-techniques-6'
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <h3><router-link to='/Home'>Home  </router-link></h3>
        <h3><router-link to='/about'>About  </router-link></h3>
        <h3><router-link to='/test'>test</router-link></h3>
          <v-spacer></v-spacer>

          <v-checkbox
            v-model='collapseOnScroll'
            color='white'
            hide-details
          ></v-checkbox>
        </v-app-bar>
        <v-sheet
          id='scrolling-techniques-6'
          class='overflow-y-auto'
          max-height='600'
        >
          <v-container style='height: 1000px'></v-container>
        </v-sheet>
      </v-card>
    </v-app>
  </div>
</template>
