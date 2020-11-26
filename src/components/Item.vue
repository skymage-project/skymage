<template>
	<v-col>
		<v-card
			class="mx-auto"
			max-width="344"
			@mouseover="toggleHover"
			@mouseout="toggleHover"
		>
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
				<!-- category  -->
				{{ trick.category }}
			</v-card-subtitle>
			<v-card-subtitle>
				<!-- price  -->
				{{ trick.price }}$
			</v-card-subtitle>

			<v-card-actions transition="fade-transition">
				<v-btn color="orange lighten-2" text> Read More </v-btn>
				<v-btn color="orange " v-show="hover">Quick View</v-btn>
				<v-spacer></v-spacer>

				<v-btn icon @click="showByIndex">
					<v-icon :id="trick.id">
						{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon
					>
				</v-btn>
			</v-card-actions>

			<v-expand-transition>
				<div v-if="show">
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
			show: false,
			hover: false,
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
				quantity: 1,
			};
			this.$store.dispatch('addToCart', item);
		},
		toggleHover() {
			this.hover = !this.hover;
		},
		showByIndex(e) {
			this.show = !this.show;
		},
	},
};
</script>

<style></style>
