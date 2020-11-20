<template>
  <v-card :dark="goDark" class="mx-auto" max-width="344">
    <v-img height="150px">
        <!-- url image -->
    </v-img>


    <v-card-title> 
        <!-- NameTrick -->
        </v-card-title>
    <v-card-subtitle> 
        <!-- price  -->

    </v-card-subtitle>

    <v-card-subtitle>
      <!-- QuickDescription -->
    </v-card-subtitle>

    <v-card-actions transition="fade-transition">
      <v-btn color="orange lighten-2" text> Read More </v-btn>
      <!-- <v-btn color="orange lighten-2" v-if="hover">Add To Cart</v-btn> -->
      <v-spacer></v-spacer>

      <v-btn icon @click="showByIndex">
        <v-icon :id="index">
          {{ show[index] ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon
        >
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show[index]">
        <v-divider></v-divider>

        <v-card-text>
      <!-- description of the trick -->
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      trick: {
        id: 1,
        name: "Borrowed Vape Through Bills ",
        quickDescription: "Object through bill effects are incredible, but they all have one flaw.",
        urlVideos:"https://j.gifs.com/oVxynX.gif",
        urlPictures: "https://j.gifs.com/oVxynX.gif",
        price: "14,95$",
        difficulty: "Easy",
        author: "Alex",
        description: "With the VAPE THRUU gimmick, you'll be able to borrow both objects (JUUL & BILL) making it completely universal.",
      },

      show: {},
      goDark: true,
      key: 0,
      // hover: false
    };
  },
  methods: {
    showByIndex(e) {
      this.show[e.target.id] = !this.show[e.target.id];
      this.key++;
    },
  },
};
</script>

<style>
</style>