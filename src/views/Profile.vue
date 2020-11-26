<template>
  <div>
     <template>
      <v-parallax
        height="450"
        src="https://www.abhayachauhan.com/wp-content/uploads/2017/10/magic-card-tricks.jpg"
      ></v-parallax>
      </template>
    <v-fab-transition>
      <v-btn
        style="position: absolute; top: 600px; left: 50%"
        color="orange"
        fab
        dark
        absolute
        bottom
        left
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-avatar size="110" style="position: absolute; top: 440px; left: 45%">
      <v-img src="https://www.w3schools.com/howto/img_avatar.png"></v-img>
    </v-avatar>
    <v-list-item-content>
      <v-list-item-title
        class="title"
        style="
          margin-top: 25px;
          margin-left: 0.5cm;
          color: orange;
          text-align: center;
        "
      >
        {{ user.firstName + " " + user.lastName }}</v-list-item-title
      >
      <v-list-item-subtitle
        style="margin-left: 0.5cm; color: orange; text-align: center"
        >{{ user.email }}</v-list-item-subtitle
      >
    </v-list-item-content>
    <div style="margin-top:2000px">hzhj</div>
  </div>
</template>

<script>
export default {
  name: "Profile",

  computed: {
    user() {
      return this.$store.state.initialState.user;
    },
  },
};
</script>

<style>
</style>