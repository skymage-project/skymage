<template>
	<v-navigation-drawer
		v-model="drawerOpen"
		absolute
		temporary
		right
		v-click-outside="toggleCart"
		width="20%"
		color="black"
	>
		<v-card max-width="98%" class="mx-auto">
			<v-container>
				<v-row dense>
					<v-col cols="12">
						<CartItem />
						<CartItem />
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-navigation-drawer>
</template>

<script>
import CartItem from './CartItem';
export default {
	name: 'Cart',
	components: { CartItem },
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
