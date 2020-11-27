<template>
  <div id="body">
    <div id="head">
      <v-parallax
        height="450"
        src="https://www.abhayachauhan.com/wp-content/uploads/2017/10/magic-card-tricks.jpg"
      ></v-parallax>
    </div>

    <div id="profile">
      <v-hover v-slot="{ hover }">
        <v-avatar size="110" style="margin-top: -1.5cm">
          <v-img src="https://www.w3schools.com/howto/img_avatar.png"></v-img>
          <v-btn v-if="hover" color="orange" fab dark x-small absolute right>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </v-avatar>
      </v-hover>

      <v-row>
        <v-col cols="2" sm="2">
          <h2>Name:</h2>
        </v-col>
        <v-col cols="2" sm="2">
          <h4>{{ user.firstName + " " + user.lastName }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="2">
          <h2>Date of birth:</h2>
        </v-col>
        <v-col cols="2" sm="2">
          <h4>{{ user.dateOfBirth }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="2">
          <h2>Country:</h2>
        </v-col>
        <v-col cols="2" sm="2">
          <h4>{{ user.country }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="2">
          <h2>Email:</h2>
        </v-col>
        <v-col cols="2" sm="2">
          <h4>{{ user.email }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" sm="2">
          <h2>Phone:</h2>
        </v-col>
        <v-col cols="2" sm="2">
          <h4>{{ user.phoneNumber }}</h4>
        </v-col>
      </v-row>

      <v-bottom-navigation id="btnNav" v-model="value" dark shift>
        <v-btn>
          <span>Wishes</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Fatoura</span>

          <v-icon> mdi-currency-usd</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <div style="margin-top: 2000px">hzhj</div>
    </div>
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

<style scoped>
#profile {
  margin: 0px 30px 90px 30px;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  position: relative;
}
h2 {
  margin-left: 1cm;
  color: rgb(255, 255, 255);
}
h4 {
  color: orange;
}
#btnNav{
   
    background-color:orange;
  
}
</style>