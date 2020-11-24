<template>
	<v-col>
		<v-card :dark="goDark" class="mx-auto" max-width="344">
			<v-img height="150px" :src="trick.urlPictures">
				<!-- url image -->
			</v-img>
			<v-card-text class="pt-4" style="position:relative;">
				<v-btn
					absolute
					color="orange"
					class="white--text"
					fab
					medium
					right
					top
					@click="addToCart"
				>
					<v-icon>fas fa-shopping-cart</v-icon>
				</v-btn>
			</v-card-text>
			<v-card-title>
				<!-- NameTrick -->
				{{ trick.name }}
			</v-card-title>
			<v-card-subtitle>
				<!-- price  -->
				{{ trick.price }}$
			</v-card-subtitle>

			<v-card-subtitle>
				<!-- QuickDescription -->
				{{ trick.quickDescription }}
			</v-card-subtitle>

			<v-card-actions transition="fade-transition">
				<v-btn color="orange lighten-2" text> Read More </v-btn>
				<!-- <v-btn color="orange lighten-2" v-if="hover">Add To Cart</v-btn> -->
				<v-spacer></v-spacer>

				<v-btn icon @click="showByIndex">
					<v-icon :id="trick.id">
						{{ show[trick.id] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon
					>
				</v-btn>
			</v-card-actions>

			<v-expand-transition>
				<div v-if="show[trick.id]">
					<v-divider></v-divider>

					<v-card-text>
						<!-- description of the trick -->
						{{ trick.description }}
					</v-card-text>
				</div>
			</v-expand-transition>
		</v-card>
	</v-col>
</template>

<script>
export default {
	props: ['trick'],
	data() {
		return {
			show: {},
			goDark: true,
			key: 0,
			// hover: false
		};
	},
	methods: {
		showByIndex(e) {
			this.show[e.target.id] = !this.show[e.target.id];
			this.key++;
		},
		addToCart() {
			let item = {
				id: this.trick.id,
				name: this.trick.name,
				picture: this.trick.urlPictures,
				price: this.trick.price,
			};
			this.$store.dispatch('addToCart', item);
		},
	},
};
</script>

<style></style>
