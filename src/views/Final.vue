<template>
  <div>
    <div>
      <Purchase />
    </div>
  </div>
</template>

<script>
import Purchase from "../components/Purchase";
import Payment from "../components/Payment.vue";
import Shipping from "../components/Shipping.vue";
export default {
  name: "Final",
  components: { Purchase, Shipping, Payment },
};
</script>

<style></style>
