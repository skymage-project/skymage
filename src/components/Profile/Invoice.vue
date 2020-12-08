<template>
  <v-card class="elevation-2">
    <v-card-title class="headline"> SUMMARY </v-card-title>
    <v-card-text>
      <h3>Order#:</h3>
      <span>{{ orderId + 1 }}</span>
      <h3>Order Totale:</h3>
      <span>{{ invoice.getTotalCartPrice }} DT</span>
      <h3>Shipping Rate:</h3>
      <span>{{ invoice.shippingRate }}</span>
      <h3>Items:</h3>
      <div v-for="(itemsName, index) in invoice.items" :key="index">
        <span> {{ index + 1 + ": " + itemsName.name }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Invoice",
  props: ["invoice", "orderId"],
};
</script>

<style scoped>
.headline {
  position: relative;
  right: -7em;
  color: orange;
}
span {
  position: relative;
  left: 12em;
  top: -2em;
  color: orange;
}
</style>
