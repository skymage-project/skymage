<template>
	<div>
		<v-hover v-slot="{ hover }">
			<v-card class="mx-auto" color="grey lighten-4" max-width="600">
				<v-img :aspect-ratio="16 / 9" :src="wish.urlPictures[0].urlPictures">
					<v-expand-transition>
						<div
							v-if="hover"
							class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
							style="height: 100%"
						>
							{{ wish.price }}DT
							<v-btn
								style="margin-top: 1cm"
								absolute
								color="orange"
								class="white--text"
								fab
								x-small
								right
								top
								@click="removeFromWishes"
							>
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</div>
					</v-expand-transition>
				</v-img>
				<v-card-text class="pt-6" style="position: relative">
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
						<v-icon>mdi-cart</v-icon>
					</v-btn>
					<h3 class="display-1 font-weight-light orange--text mb-2">
						{{ wish.name }}
					</h3>
				</v-card-text>
			</v-card>
		</v-hover>
	</div>
</template>

<script>
export default {
	props: ['wish'],
	name: 'Wishes',
	methods: {
		removeFromWishes() {
			this.$store.dispatch('removeFromWishes', this.wish.id);
		},
		addToCart() {
			let item = {
				id: this.wish.id,
				name: this.wish.name,
				picture: this.wish.urlPictures,
				price: this.wish.price,
				quantity: 1,
			};
			this.$store.dispatch('addToCart', item);
		},
	},
};
</script>

<style>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.5;
	position: absolute;
	width: 100%;
}
</style>
