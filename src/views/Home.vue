<template>
<v-app>
<v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>

          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

          <v-divider class="my-3"></v-divider>

          <div class="title mb-3">Check out our newest features!</div>

          <v-btn
            class="mx-0"
            color="primary"
            large
          >
            See more
          </v-btn>
        </v-flex>
      </v-layout>
      <div>
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      prominent
      src="https://j.gifs.com/L73vD4.gif"
    >
    </v-app-bar>
    </v-card>
</div>
    </v-container>
  </v-jumbotron>
</v-app>

  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
