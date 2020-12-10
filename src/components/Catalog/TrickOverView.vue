<template>
	<v-layout row justify-center>
		<v-dialog
			v-model="showTrickOverView"
			persistent
			width="60em"
			height="60em"
			@click:outside="toggleOverView"
		>
			<v-container class="dark">
				<v-row no-gutters>
					<v-col lg="8" sm="8" md="8">
						<v-card class="pa-2">
							<v-carousel hide-delimiters>
								<v-carousel-item
									v-for="item in trick.urlPictures"
									:key="item.id"
									:src="item.urlPictures"
									reverse-transition="fade-transition"
									transition="fade-transition"
									width="100%"
								></v-carousel-item>
							</v-carousel>
							<!-- 					<v-col cols="12" sm="12" md="12">
									<v-layout align-start justify-end fill-height>
										<v-card
											v-for="item in trick.urlPictures"
											:key="item.id"
											class="pa-2"
											width="25%"
										>
											<v-img
												height="120px"
												v-html="getiframeDown(item.urlPictures)"
											/>
										</v-card> </v-layout
								></v-col> -->
						</v-card>
					</v-col>
					<v-col lg="4" sm="4" md="4">
						<v-card class="pa-2" height="100%">
							<v-row>
								<v-card-title class="trick-name">
									{{ trick.name }}
								</v-card-title>
								<span class="trick-text">
									{{ trick.quickDescription }}
								</span>
								<v-btn
									color="orange"
									class="view-FP-button"
									@click="
										toggleOverView();
										openOneTrickFullPage();
									"
									>View Full Page</v-btn
								>
								<v-card-subtitle block tile outlined class="trick-price"
									>{{ trick.price }} DT</v-card-subtitle
								>

								<v-btn
									color="orange"
									class="add-item-to-cart-button"
									@click="
										addItemToCart();
										toggleOverView();
									"
									>Add To Cart</v-btn
								>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-dialog>
	</v-layout>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import OnetrickFullPage from '../OnetrickFullPage.vue';
export default {
	components: { OnetrickFullPage },
	props: ['showTrickOverView', 'trick'],
	name: 'TrickOverView',
	computed: {
		...mapState(['displayedTricks', 'cart']),
	},
	data() {
		return {
			show: false,
			full: true,
		};
	},
	methods: {
		toggleOverView() {
			this.$emit('toggle-over-view');
		},
		openOneTrickFullPage() {
			// this.full = true;
			this.$router.push({
				name: 'ItemDetailed',
				params: { id: this.trick.id },
			});
		},
		bindImg() {},
		addItemToCart() {
			let item = {
				id: this.trick.id,
				name: this.trick.name,
				picture: this.trick.urlPictures[0].urlPictures,
				price: this.trick.price,
				quantity: 1,
			};
			this.$store.dispatch('addToCart', item);
		},
		getiframe(url) {
			return `<img  src="${url}"/>`;
		},
		getiframeDown(url) {
			return `<img width="120px" height="120px" src="${url}"/>`;
		},
	},
};
</script>
<style scoped>
.price {
	position: relative;
	top: 0vw;
	font-weight: bold;
	font-size: 20px;
}
.trick-name {
	padding-left: 1.5em;
	font-family: 'Permanent Marker', cursive;
	font-size: 25px;
	text-align: justify;
	text-align: center;
}
.trick-text {
	padding: 1.5em;
	font-size: 18px;
	text-align: justify;
	text-justify: inter-word;
}
.add-item-to-cart-button {
	position: absolute;
	bottom: 1em;
	right: 1.5em;
}
.trick-price {
	position: absolute;
	font-size: 18px;
	font-weight: 600;
	bottom: 0.3em;
	left: 1em;
	color: white;
}
.view-FP-button {
	position: absolute;
	bottom: 5em;
	right: 1.5em;
}
</style>
