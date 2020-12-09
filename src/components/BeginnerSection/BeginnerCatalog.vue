<template>
	<div>
		<v-container inline>
			<v-row style="row-gap: 2em">
				<Item
					v-for="trick in displayedTricks"
					v-if="trick.difficulty === 'Beginner' && trick.category === 'DvD'"
					:key="trick.id"
					:trick="trick"
				/>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Item from '../Catalog/Item.vue';
import { mapState } from 'vuex';

export default {
	name: 'BeginnerCatalog',
	components: {
		Item,
	},
	computed: {
		...mapState(['displayedTricks']),
	},
};
</script>

<style lang="scss" scoped></style>
