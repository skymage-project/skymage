<template>
	<div>
		<v-card max-width="100%" class="mx-auto">
			<v-container>
				<v-row dense>
					<CartItem
						v-for="(addedItem, i) in cart.itemsToCart"
						:key="i"
						:addedItem="addedItem"
					/>
				</v-row>
			</v-container>
		</v-card>
	</div>
</template>

<script>
import CartItem from '../components/CartItem';
import { mapState } from 'vuex';
export default {
	components: { CartItem },
	computed: {
		...mapState(['cart']),
	},
};
</script>
<style lang="scss" scoped></style>
