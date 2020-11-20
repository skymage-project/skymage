<template>
<v-container
    
      class="grey lighten-5 mb-6"
    >
<v-row
        :align="align"
        no-gutters
        style="height: 150px;
        row-gap: 2em;"
        :key="key"
      >
<v-col   v-for="(n, index) in 6"
          :key="n"
    >
        <!-- @mouseover="hover = true"
          @mouseleave="hover = false" -->
  <v-card :dark="goDark"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://j.gifs.com/oVxynX.gif"
      height="150px"
    ></v-img>

    <v-card-title>
      Borrowed Vape Through Bills
    </v-card-title>
     <v-card-subtitle>
     price : 14,95$

    </v-card-subtitle>

    <v-card-subtitle>
      Object through bill effects are incredible, but they all have one flaw.
    </v-card-subtitle>

    <v-card-actions transition="fade-transition">
      <v-btn
        color="orange lighten-2"
        text
      >
        Read More
      </v-btn>
<!-- <v-btn color="orange lighten-2" v-if="hover">Add To Cart</v-btn> -->
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="showByIndex"
      >
        <v-icon :id="index"> {{ show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show[index]">
        <v-divider></v-divider>

        <v-card-text>
         With the VAPE THRUU gimmick, you'll be able to borrow both objects (JUUL & BILL) making it completely universal.

 Borrow 1 or both items
 No switches
 Works with all JUUL colors
 Takes almost no pocket space
 Can be performed in person or online
 Ends clean, they can examine both items

With an estimated 70% of the global e-cigarette market, JUUL is the most recognised 'vape' on the planet. This allows the vape to be brought into and out of play without any suspicion - people see them every day.

It also puts 'cigarette-style' magic tricks into the hands of people who don't smoke or vape, as you don't need to carry a real cigarette or JUUL to perform this effect. It can all be borrowed.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col >
</v-row>
</v-container>
</template>


<script>
export default {
  name: "Test",
  data: () => ({
      show: {},
      goDark: true,
      key: 0,
      // hover: false
    }),
    methods: {
      showByIndex(e) {
        this.show[e.target.id] = !this.show[e.target.id]
        this.key++;
      }
    }
};
</script>

<style>
body{
  background-color: #272727;
}
</style>