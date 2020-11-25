<template>
	<div>
		<v-card>
			<v-img
				:src="card.src"
				class="white--text align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
				height="200px"
			>
				<v-btn icon class="heart-trick-button">
					<v-icon>mdi-heart-outline</v-icon>
				</v-btn>
				<v-card-title v-text="card.title"></v-card-title>
			</v-img>

			<v-card-actions>
				<v-icon>mdi-cash</v-icon>
				<span class="trick-price">{{ card.price }} DT</span>
				<v-spacer></v-spacer>
				<v-btn icon class="plus-cart-trick">
					<v-icon>mdi-plus</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-numeric-{{ card.quantity }}-circle-outline</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-delete-outline</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	data: () => ({
		card: {
			title: 'How to Read Minds Kit',
			src: 'https://j.gifs.com/OM32OR.gif',
			flex: 6,
			quantity: 9,
			price: 90,
		},
	}),
};
</script>

<style lang="scss" scoped>
.heart-trick-button {
	position: relative;
	right: -15em;
	top: -7em;
}
.trick-price {
	font-family: 'Roboto', monospace;
	font-weight: bold;
	font-size: 18px;
}
.plus-cart-trick {
	position: relative;
	right: -1em;
}
</style>
