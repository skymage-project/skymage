<template>
  <div>
    <div>
      <v-app-bar color="#6A76AB" prominent src="https://j.gifs.com/L73vD4.gif">
      </v-app-bar>
    </div>
    <div
      class="w3-container w3-content w3-padding-64"
      style="max-width: 800px; color: orange"
      id="contact"
    >
      <h1 class="w3-wide w3-center">
        Please feel free to reach out to us with your questions and comments.
      </h1>
      <h2 class="w3-wide w3-center">CONTACT</h2>
      <div class="w3-row w3-padding-32">
        <div class="w3-col m6 w3-large w3-margin-bottom">
          <i class="fa fa-map-marker" style="width: 30px"></i> Chicago, US<br />
          <i class="fa fa-phone" style="width: 30px"></i> Phone: +00 151515<br />
          <i class="fa fa-envelope" style="width: 30px"> </i> Email:
          mail@mail.com<br />
        </div>
        <div class="w3-col m6">
            <div class="w3-row-padding" style="margin: 0 -16px 8px -16px">
              <div class="w3-half">
                <input
                  class="w3-input"
                  style="color: orange;border-color:orange"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                  v-model="name"
                />
              </div>
              <div class="w3-half">
                <input
                  class="w3-input"
                  style="color: orange;border-color:orange"
                  type="text"
                  placeholder="Email"
                  required
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <input
              class="w3-input"
              style="color: orange;border-color:orange"
              type="text"
              placeholder="Message"
              required
              name="message"
              v-model="message"
            />
            <button onclick="sendMessage"
              class="w3-button w3-orange w3-section w3-right"
            >
              SEND
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data :()=>({
    name:'',
    email:'',
    message:'',
  }),
  methods:{
    sendMessage(){
      let message = {
        name:this.name,
        email: this.email,
        message: this.message,
        };
      this.$store.dispatch('sendMessage',message);
    }
  }
}
</script>
