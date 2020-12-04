<template>
	<div>
		<div v-if="!check">
			<v-row class="mb-6" no-gutters>
				<v-col sm="5" md="6">
					<h2>Dear {{ user.firstName }} {{ user.lastName }}</h2>
					<br />
					<h3>Please choose your shipping method:</h3>
					<br />

					<v-radio-group v-model="selected" mandatory>
						<v-radio
							label="Free Shipping"
							:value="0"
							@click="shipping"
						></v-radio>
						<v-radio label="Flat Rate" :value="9" @click="shipping"></v-radio>
						<v-radio
							label="Rapid Poste"
							:value="20"
							@click="shipping"
						></v-radio>
						<v-radio
							label="DHL EXPRESS TUNISIA"
							:value="50"
							@click="shipping"
						></v-radio>
					</v-radio-group>
					<br />
					<v-btn color="warning" @click="goToPayment"
						>Continue To payment</v-btn
					>
				</v-col>
				<v-col sm="5" offset-sm="2" md="6" offset-md="0">
					<CartItemList />
					<h3>Subtotal: {{ getTotalCartPrice }} DT</h3>
					<br />
					<h3>Shipping: {{ selected }} DT</h3>
					<br />
					<hr />
					<br />
					<h3>Total: {{ getTotalCartPrice + selected }} DT</h3>
				</v-col>
			</v-row>
		</div>
		<div v-if="check">
			<Payment :selected="selected" :shippingRate="shippingRate" />
		</div>
	</div>
</template>

<script>
import CartItemList from '../components/CartItemList';
import Payment from '../components/Payment';
import { mapState, mapGetters } from 'vuex';
export default {
	components: { CartItemList, Payment },
	computed: {
		...mapState(['cart']),
		...mapGetters(['getTotalCartPrice']),
		loggedIn() {
			return this.$store.state.initialState.status.loggedIn;
		},
		user() {
			return this.$store.state.initialState.user;
		},
	},
	data: () => ({
		radios: null,
		selected: null,
		check: false,
		shippingRate: 'Free Shipping',
	}),
	methods: {
		goToPayment() {
			this.check = !this.check;
		},
		shipping() {
			if (this.selected === 9) {
				this.shippingRate = 'Flat Rate';
			} else if (this.selected === 20) {
				this.shippingRate = 'Rapid Poste';
			} else if (this.selected === 50) {
				this.shippingRate = 'DHL EXPRESS TUNISIA';
			} else {
				this.shippingRate = 'Free Shipping';
			}
		},
	},
};
</script>

<style></style>
