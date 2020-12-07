<template>
	<div>
		<div>
			<Purchase />
		</div>
	</div>
</template>

<script>
import Purchase from '../components/PurchaseProcess/Purchase.vue';
import Payment from '../components/PurchaseProcess/Payment.vue';
import Shipping from '../components/PurchaseProcess/Shipping.vue';
import PurchaseDone from '../components/PurchaseProcess/PurchaseDone.vue';
export default {
	components: { Purchase, Shipping, Payment, PurchaseDone },
};
</script>

<style></style>
