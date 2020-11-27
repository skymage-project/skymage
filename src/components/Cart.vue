<template>
	<v-navigation-drawer
		v-model="drawerOpen"
		absolute
		temporary
		right
		v-click-outside="toggleCart"
		width="20%"
		color="black"
		height="auto"
	>
		<v-card max-width="100%" class="mx-auto">
			<v-container>
				<v-row dense>
					<v-col cols="12">
						<CartItem
							v-for="(addedItem, i) in cart.itemsToCart"
							:key="i"
							:addedItem="addedItem"
						/>
						<v-row no-gutters>
							<v-col cols="12" sm="6" md="8">
								<v-card class="pa-2">
									<v-btn color="warning" dark block @click="goPurchase">
										Checkout
									</v-btn>
								</v-card>
							</v-col>
							<v-col cols="6" md="4">
								<v-card class="pa-2">
									<v-btn color="white" block tile outlined>
										{{ getTotalCartPrice }} DT
									</v-btn>
								</v-card>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CartItem from './CartItem';
export default {
	name: 'Cart',
	components: { CartItem },
	computed: {
		...mapState(['cart']),
		...mapGetters(['getTotalCartPrice']),
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
		goPurchase() {
			if (this.route === '/purchase') {
				return;
			}
			this.$router.push('/purchase');
			this.route = '/purchase';
		},
	},
};
</script>

<style lang="scss" scoped></style>
