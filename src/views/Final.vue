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
import PurchaseDone from "../components/PurchaseDone";
export default {
  components: { Purchase, Shipping, Payment, PurchaseDone },
};
</script>

<style></style>
