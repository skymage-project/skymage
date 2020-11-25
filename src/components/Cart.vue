<template>
	<v-navigation-drawer
		v-model="drawerOpen"
		absolute
		temporary
		right
		v-click-outside="toggleCart"
		width="18%"
		color="black"
		height="auto"
	>
		<v-card max-width="98%" class="mx-auto">
			<v-container>
				<v-row dense>
					<v-col cols="12">
						<CartItem
							v-for="(addedItem, i) in cart.itemsToCart"
							:key="i"
							:addedItem="addedItem"
						/>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import CartItem from './CartItem';
export default {
	name: 'Cart',
	components: { CartItem },
	computed: {
		...mapState(['cart']),
	},
	data() {
		return {
			drawerOpen: true,
		};
	},
	methods: {
		toggleCart() {
			this.$emit('my-click-outside');
		},
	},
};
</script>

<style lang="scss" scoped></style>
