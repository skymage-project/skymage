<template>

  <v-card :dark="goDark"
    class="mx-auto"
    max-width="344"
  >
  <v-switch :label="`Dark Theme`" v-model="goDark"></v-switch>
    <v-img
      src="https://j.gifs.com/oVxynX.gif"
      height="250px"
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

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
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
</template>


<script>
export default {
  name: "Test",
  data: () => ({
      show: false,
      goDark: false
    }),
};
</script>

<style>
</style>