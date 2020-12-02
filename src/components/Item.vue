<template>
	<v-card
		class="mx-auto"
		width="23%"
		height="380px"
		@mouseover="toggleHover"
		@mouseout="toggleHover"
	>
		<v-img height="150px" :src="trick.urlPictures[0].urlPictures">
			<v-btn icon @click="toggleWish">
				<v-icon v-if="wished">mdi-heart</v-icon>
				<v-icon v-else>mdi-heart-outline</v-icon>
			</v-btn>
		</v-img>
		<v-card-text class="pt-4" style="position:relative;">
			<v-btn
				absolute
				color="orange"
				class="white--text"
				fab
				small
				right
				top
				@click="addToCart"
			>
				<v-icon>mdi-cart</v-icon>
			</v-btn>
		</v-card-text>
		<v-card-title>
			<!-- NameTrick -->
			{{
				trick.name.length > 20 ? trick.name.slice(0, 18) + '...' : trick.name
			}}
		</v-card-title>
		<v-card-subtitle>
			<!-- category  -->
			{{ trick.category }}
		</v-card-subtitle>
		<v-card-subtitle>
			<!-- price  -->
			{{ trick.price }} DT
		</v-card-subtitle>

		<v-btn class="buttonQuick" color="orange " v-show="hover" @click="showD"
			>Quick View</v-btn
		>

		<TrickOverView
			:trick="trick"
			:showDiv="showDiv"
			@toggle-over-view="showD"
		/>
		<v-spacer></v-spacer>
	</v-card>
</template>

<script>
import TrickOverView from './TrickOverView';
import { mapGetters } from 'vuex';
export default {
	props: ['trick'],
	data() {
		return {
			show: false,
			hover: false,
			wished: false,
		};
	},
	computed: {
		userId() {
			return this.$store.state.initialState.user.id;
		},
		...mapGetters(['getWishListItems']),
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
				picture: this.trick.urlPictures[0].urlPictures,
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
		toggleWish() {
			if (this.wished) {
				this.$store
					.dispatch('removeFromWishList', {
						UserId: this.userId,
						ItemId: this.trick.id,
					})
					.then(() => {
						this.wished = false;
						console.log(this.wished);
					});
			} else {
				this.$store
					.dispatch('addToWishList', {
						UserId: this.userId,
						ItemId: this.trick.id,
					})
					.then(() => {
						this.wished = true;
						console.log(this.wished);
					});
			}
		},
		showD() {
			this.showDiv = !this.showDiv;
		},
	},
	created: function() {
		if (this.getWishListItems) {
			for (var i = 0; i < this.getWishListItems.length; i++) {
				if (this.getWishListItems[i].ItemId === this.trick.id) {
					this.wished = true;
				}
			}
		}
	},
};
</script>

<style scoped>
.buttonQuick {
	position: relative;
	left: 8em;
	top: -1em;
}
</style>
