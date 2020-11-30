<template>
  <div id="body">
    <div id="head">
      <v-parallax
        height="450"
        src="https://www.abhayachauhan.com/wp-content/uploads/2017/10/magic-card-tricks.jpg"
      ></v-parallax>
    </div>

    <div id="profile">
      <v-hover>
        <div id="avatar-container" slot-scope="{ hover }">
          <v-avatar size="110">
            <v-img :src="img"></v-img>
          </v-avatar>
          <v-btn id="uploads-btn" v-if="hover" fab dark x-small absolute @click='$refs.image.click()'>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >
        </div>
      </v-hover>
      <v-card height="300" width="400" style="border-radius: 8px">
        <v-row>
          <v-col cols="6" sm="6">
            <h2>Name:</h2>
          </v-col>
          <v-col cols="6" sm="6">
            <h4>{{ user.firstName + " " + user.lastName }}</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="6">
            <h2>Date of birth:</h2>
          </v-col>
          <v-col cols="6" sm="6">
            <h4>{{ user.dateOfBirth }}</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="6">
            <h2>Country:</h2>
          </v-col>
          <v-col cols="6" sm="6">
            <h4>{{ user.country }}</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="6">
            <h2>Email:</h2>
          </v-col>
          <v-col cols="6" sm="6">
            <h4>{{ user.email }}</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="6">
            <h2>Phone:</h2>
          </v-col>
          <v-col cols="6" sm="6">
            <h4>{{ user.phoneNumber }}</h4>
          </v-col>
        </v-row>
      </v-card>
      <v-bottom-navigation id="btnNav" v-model="value" dark shift grow>
        <v-btn >
          <span>Wishes</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Invoice</span>

          <v-icon> mdi-currency-usd</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <div v-if="value === 0">
        <v-timeline>
          <v-timeline-item v-for="n in 4" :key="n">
            <template v-slot:icon>
              <v-avatar>
                <img src="http://i.pravatar.cc/64" />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>Lorem ipsum</span>
            </template>
            <Wishes/>
          </v-timeline-item>
        </v-timeline>
      </div>
      <div v-if="value === 1">
        <v-timeline>
        <v-timeline-item
      v-for="n in 3"
      :key="n"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Date</span>
      </template>
      <Invoice />
    </v-timeline-item>
    </v-timeline>
      </div>
      <div style="margin-top: 2000px">hzhj</div>
    </div>
  </div>
</template>

<script>
import Wishes from "../components/Wishes.vue";
import Invoice from "../components/Invoice.vue";
import axios from "axios";
export default {
  name: "Profile",
  components: {
    Wishes,
    Invoice
  },
  data: () => ({
     value: 0 ,

     }),
  computed: {
    user() {
      return this.$store.state.initialState.user;
    },
    img() {
      return this.user.img?this.user.img:'https://www.w3schools.com/howto/img_avatar.png'
    }
  },
  methods: {
    onFilePicked(e) {
      const img = e.target.files[0];
      if (img !== undefined) {
        this.$store.dispatch('updateProfilePic',img).then(() => {
          this.$router.go()
        })
      }
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
  margin-top: 7px;
  color: orange;
}
#btnNav {
  background-color: orange;
}

#avatar-container {
  height: 109px;
  margin-top: -1.5cm;
  width: 109px;
  border-radius: 50%;
  display: inline-block;
}

#uploads-btn {
  margin-top: -1cm;
  background-color: orange;
}
</style>