<template>
  <div>
    <div v-if="check === 0">
      <Purchase :check="check" />
    </div>
    <!--<div>
      <Shipping v-if="check === 1" />
    </div>
    <div>
      <Payment v-if="check === 2" />
    </div>-->
  </div>
</template>

<script>
import Purchase from "../components/Purchase";
import Payment from "../components/Payment.vue";
import Shipping from "../components/Shipping.vue";
export default {
  name: "Final",
  components: { Purchase, Shipping, Payment },
  data: () => ({
    check: 0,
  }),
  computed: {
    change(id) {
      this.check = id;
    },
  },
  methods: {
    // change(id) {
    //   this.check = id;
    // },
  },
};
</script>

<style></style>
