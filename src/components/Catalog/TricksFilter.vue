<template>
	<div>
		<v-container fluid>
			<v-row align="center">
				<v-col class="d-flex" cols="12" sm="6">
					<v-select
						color="orange"
						itemColor="orange"
						:items="items"
						label="Order By"
						@change="search"
					></v-select>
					<v-select
						color="orange"
						itemColor="orange"
						:items="itemDifficulty"
						label="Difficulty"
						@change="search"
					></v-select>
					<v-select
						color="orange"
						itemColor="orange"
						:items="itemsByCategory"
						label="Category"
						@change="search"
					></v-select>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [
			'Price: decreasing order',
			'Price: increasing order',
			'Bestsellers',
		],
		itemDifficulty: ['Beginner', 'Intermediate', 'Advanced'],
		itemsByCategory: [
			'Beginners', //https://www.bigmagie.com/3-tres-facile
			'Close Up', // https://www.bigmagie.com/7-close-up
			'Cards', // https://www.bigmagie.com/4-cartes
			'Coins', // https://www.bigmagie.com/2-argents
			'Mental', // https://www.bigmagie.com/6-mentalisme
			'BigShows', //https://www.bigmagie.com/9-salon-scene
			'DvD', //https://www.bigmagie.com/11-dvd
			'Books', // https://www.bigmagie.com/12-livres
			'Playing Cards', // https://www.bigmagie.com/14-jeux-de-cartes
			'Accessories', //https://www.bigmagie.com/10-access-consom
			'Promotion', // https://www.bigmagie.com/48-blackfriday?orderby=reference&orderway=desc&n=216
		],
	}),
	methods: {
		search(event) {
			this.$store.dispatch('filterBy', event);
			this.itemDifficulty.unshift('All');
		},
	},
};
</script>
<style></style>
