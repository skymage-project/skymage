<template>
	<div>
		<v-card max-width="100%" class="mx-auto">
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
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
