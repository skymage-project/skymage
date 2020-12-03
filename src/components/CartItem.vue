<template>
	<div>
		<v-card width="100%">
			<v-img
				:src="addedItem.picture"
				class="white--text align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
				height="200px"
			>
				<v-card-title>{{
					addedItem.name.length > 20
						? addedItem.name.slice(0, 20) + '...'
						: addedItem.name
				}}</v-card-title>
			</v-img>

			<v-card-actions>
				<span class="trick-price">{{ addedItem.price }} DT</span>
				<v-spacer></v-spacer>
				<span class="trick-price">QTY</span>
				<v-btn icon class="plus-cart-trick" @click="addItemToCart">
					<v-icon>mdi-plus</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-numeric-{{ addedItem.quantity }}-circle-outline</v-icon>
				</v-btn>
				<v-btn icon @click="decreaseQuantity">
					<v-icon>mdi-minus</v-icon>
				</v-btn>
				<v-btn icon @click="removeItemFromCart">
					<v-icon>mdi-delete-outline</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: ['addedItem'],
	name: 'CartItem',

	methods: {
		addItemToCart() {
			let item = {
				id: this.addedItem.id,
				name: this.addedItem.name,
				picture: this.addedItem.picture,
				price: this.addedItem.price,
				quantity: 1,
			};
			this.$store.dispatch('addToCart', item);
		},
		decreaseQuantity() {
			let item = {
				id: this.addedItem.id,
				name: this.addedItem.name,
				picture: this.addedItem.picture,
				price: this.addedItem.price,
				quantity: 1,
			};
			this.$store.dispatch('decreaseQuantity', item);
		},
		removeItemFromCart() {
			this.$store.dispatch('removeFromCart', this.addedItem.id);
		},
		itemName() {
			if (this.addedItem.name.length > 20) {
				return this.addedItem.name.slice(0, 20) + '...';
			} else {
				return this.addedItem.name;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.heart-trick-button {
	position: relative;
	right: -19em;
	top: -5em;
}
.trick-price {
	font-family: 'Audiowide', cursive;
	font-weight: bold;
	font-size: 16px;
}
.plus-cart-trick {
	position: relative;
	right: -1em;
}
</style>
