<template>
	<div>
		<v-container fluid>
			<v-row align="center">
				<v-col class="d-flex" cols="12" sm="6">
					<v-select :items="items" label="Order By" @change="search"></v-select>
					<v-select
						:items="itemDifficulty"
						label="Difficulty"
						@change="search"
					></v-select>
					<v-select
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
			'price: decreasing order',
			'price: increasing order',
			'bestsellers',
		],
		itemDifficulty: ['Beginner', 'Intermediate', 'Advanced'],
		itemsByCategory: [
			'Beginners',
			'Close Up',
			'Cards',
			'Coins',
			'Mental',
			'BigShows',
			'DvD',
			'Books',
			'Playing Cards',
			'Accessories',
			'Promotion',
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
