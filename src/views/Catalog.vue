<template>
	<v-container class="grey lighten-5 mb-6">
		<v-row no-gutters style="height: 150px; row-gap: 2em">
			<Item v-for="trick in tricks" :key="trick.id" :trick="trick" />
		</v-row>
	</v-container>
</template>

<script>
import Item from '../components/Item.vue';
import { mapState } from 'vuex';
export default {
	created() {
		this.$store.dispatch('fetchTricks');
	},
	computed: {
		...mapState(['tricks']),
	},
	components: { Item },
	name: 'Catalog',
	data: () => ({
		show: {},
		goDark: true,
		key: 0,
		// hover: false
	}),
	methods: {
		showByIndex(e) {
			this.show[e.target.id] = !this.show[e.target.id];
			this.key++;
		},
	},
};
</script>

<style scoped>

</style>
