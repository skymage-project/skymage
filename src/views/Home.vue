<template>
  <div>
    <v-parallax
      dark
      src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700416024.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h3 class="display-3">Welcome to SKYMAGE</h3>

                <h2 class="subheading">
                  The first virtual magic market place in AFRICA
                </h2>

                <v-divider class="my-3"></v-divider>

                <div class="title mb-3">
                  Check out our newest
                  <span
                    class="spann"
                    style="font-weight: bold; font-style: italic"
                    @click="goCatalog"
                    >tricks!</span
                  >
                </div>
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
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  methods: {
    goCatalog() {
      if (this.route === "/catalog") {
        return;
      }
      this.$router.push("/catalog");
      this.route = "/catalog";
    },
  },
};
</script>
<style scoped>
.spann:hover {
  color: orange;
}
</style>
