<template>
  <div>
    <v-parallax
      height="1200"
      dark
      style="opacity: 0.3;"
      :src="this.product.urlPictures[0].urlPictures"
    >
    </v-parallax>
    <v-container class="mainContainer">
      <v-row>
        <v-col cols="7" sm="3" md="7">
          <v-col cols="12"> </v-col>
          <v-col cols="12"> </v-col>
          <v-col cols="12"> </v-col>

          <v-row>
            <v-col cols="12">
              <iframe
                class="frameProd"
                width="640"
                height="370"
                :src="this.product.urlVideos[0].urlVideos"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="5" sm="5" md="5">
          <v-col cols="12">
            <p class="titleProd">{{ this.product.name }}</p></v-col
          >
          <v-col cols="12">
            <h3 class="authorProd">
              {{ this.product.author }}
            </h3>
          </v-col>

          <v-row no-gutters>
            <v-col cols="12"
              ><h3 class="quickDesc">
                {{ this.product.quickDescription }}
              </h3></v-col
            >
          </v-row>
        </v-col>
      </v-row>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12">
        <hr class="line" />
        <p class="descriptionCss">
          {{ this.product.description.descriptionText }}
        </p>
        <hr class="line" />
      </v-col>

      <v-col cols="12"> </v-col>
    </v-container>

    <About />
  </div>
</template>

<script>
import About from "../components/Hompage/About";
export default {
  components: { About },
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  computed: {},
  methods: {},
  created() {
    let key = this.$store.state.tricks;
    let idTr = this.$route.params.id;
    this.product = key.filter((el) => el.id === idTr)[0];
  },
};
</script>

<style scoped>
.frameProd:hover {
  animation: radial-pulse 2s infinite;
}
@keyframes radial-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
  }
}

hr {
  animation: color 4s ease infinite;
}
@keyframes color {
  0% {
    border-color: white;
  }
  25% {
    border-color: rgb(224, 248, 179);
  }
  50% {
    border-color: rgb(241, 213, 121);
  }
  75% {
    border-color: rgb(247, 171, 85);
  }
  100% {
    border-color: rgb(238, 139, 10);
  }
}
.authorProd {
  position: relative;
  top: -2em;
  color: #f0660b;
}
.titleProd {
  font-family: "Roboto", sans-serif;
  font-size: 2em;
}
.quickDesc {
  position: relative;

  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.5em;
  top: -2em;
}
.descriptionCss {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  font-family: "Roboto", sans-serif;
  /* text-transform: uppercase; */
  letter-spacing: 4px;
  font-size: 1.1em;
}
.mainContainer {
  position: relative;
  top: -81em;
}
</style>
