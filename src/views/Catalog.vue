<template>
	<div>
		<TricksFilter />
		<v-container inline>
			<v-row style="height: 150px; row-gap: 2em">
				<Item v-for="trick in displayedTricks" :key="trick.id" :trick="trick" />
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Item from '../components/Item.vue';
import TricksFilter from '../components/TricksFilter.vue';
import { mapState } from 'vuex';
export default {
	name: 'Catalog',
	components: {
		Item,
		TricksFilter,
	},
	data: () => ({
		loading: true,
	}),
	computed: {
		...mapState(['displayedTricks']),
	},
	created() {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			Promise.all([
				this.$store.dispatch('getItems'),
				this.$store.dispatch('fetchWishList', user.id),
			]).finally(() => {
				this.loading = false;
			});
		} else {
			this.$store.dispatch('getItems');
		}
	},
};
</script>

<style scoped></style>
