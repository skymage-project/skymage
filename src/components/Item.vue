<template>
  <v-col>
    <v-card :dark="goDark" class="mx-auto" max-width="344" @mouseover="toggleHover" @mouseout="toggleHover">
      <v-img height="150px" :src="trick.urlPictures">
        <!-- url image -->
      </v-img>
      <v-card-title>
        <!-- NameTrick -->
        {{ trick.name }}
      </v-card-title>
      <v-card-subtitle>
        <!-- category  -->
        {{ trick.category }}
      </v-card-subtitle>
      <v-card-subtitle>
        <!-- price  -->
        {{ trick.price }} $
      </v-card-subtitle>
      <v-card-subtitle>
        <!-- QuickDescription -->
        {{ trick.quickDescription }}
      </v-card-subtitle>

      <v-card-actions transition="fade-transition">
        <v-btn color="orange lighten-2" text> Read More </v-btn>
        <v-btn color="orange lighten-2" v-if="hover">Quick View</v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="showByIndex">
          <v-icon :id="trick.id"> {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-if="show">
          <v-divider></v-divider>

          <v-card-text>
            <!-- description of the trick -->
            {{ trick.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["trick"],
  data() {
    return {
      show: false,
      goDark: true,
      hover: false,
    };
  },
  methods: {
    toggleHover() {
      this.hover = !this.hover;
    },
    showByIndex(e) {
      this.show = !this.show;
    },
  },
};
</script>

<style></style>
