<template>
	<v-navigation-drawer v-model="cart.showCart" absolute right>
		<v-btn text>Beginners </v-btn>
	</v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'Cart',
	computed: {
		...mapState(['cart']),
	},
	data() {
		return {
			drawerOpen: this.cart.showCart,
		};
	},
	watch: {
		showCart(newVal) {
			this.drawerOpen = newVal;
		},
	},
};
</script>

<style lang="scss" scoped></style>
