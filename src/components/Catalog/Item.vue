<template>
	<v-col cols="10" sm="5" md="3" xs="6" lg="3">
		<v-card
			class="mx-auto"
			height="25em"
			width="25em"
			@mouseover="toggleHover"
			@mouseout="toggleHover"
		>
			<v-img height="17em" :src="trick.urlPictures[0].urlPictures">
				<v-btn icon @click="toggleWish">
					<v-icon color="orange" v-if="wished">mdi-heart</v-icon>
					<v-icon color="orange" v-else>mdi-heart-outline</v-icon>
				</v-btn>
			</v-img>
			<v-card-text class="pt-0" style="position:relative;">
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
					trick.name.length > 20 ? trick.name.slice(0, 15) + '...' : trick.name
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
			<v-btn
				class="buttonQuick"
				color="orange "
				v-show="hover"
				@click="showDivTrickOverView"
				>Quick View</v-btn
			>

			<TrickOverView
				:trick="trick"
				:showTrickOverView="showTrickOverView"
				@toggle-over-view="showDivTrickOverView"
			/>
			<v-spacer></v-spacer>
		</v-card>
	</v-col>
</template>

<script>
import TrickOverView from './TrickOverView';
import { mapState, mapGetters } from 'vuex';
export default {
	name: 'Item',
	props: ['trick'],
	components: { TrickOverView },
	data() {
		return {
			show: false,
			hover: false,
			wished: false,
			showTrickOverView: false,
		};
	},
	computed: {
		...mapState(['users']),
		userId() {
			return this.users.initialState.user.id;
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
		showDivTrickOverView() {
			this.showTrickOverView = !this.showTrickOverView;
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
	position: absolute;
	bottom: 1.2em;
	right: 1.5em;
}
.v-card__title {
	padding: 0;
	padding-left: 1em;
	padding-bottom: 0.7em;
}
.v-card__subtitle {
	padding-top: 0em;
	padding-left: 2em;
	padding-bottom: 0.2em;
	font-weight: 600;
}
</style>
