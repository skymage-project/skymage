<template>
	<div>
		<v-app-bar id="nav" :dark="goDark">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-items>
				<v-btn text @click="goHome"><span class="span">Home</span></v-btn>
				<v-btn text @click="goCatalog"> <span class="span">Tricks</span></v-btn>
				<v-btn text @click="goBeginnerSection">
					<span class="span">LEARN MAGIC</span></v-btn
				>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-btn text @click="profile" v-if="users.initialState.status.loggedIn">
				<span class="span">Profile</span></v-btn
			>
			<v-btn text @click="logOut" v-if="users.initialState.status.loggedIn">
				<span class="span">Logout</span></v-btn
			>

			<v-btn text @click="goSignin" v-else>
				<span class="span">Signin</span></v-btn
			>
			<v-btn @click="toggleShowCart">
				<v-badge left color="warning">
					<span slot="badge">{{ cartItemsLength }}</span>
					<v-icon>fas fa-shopping-cart</v-icon>
				</v-badge>
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			temporary
			absolute
			left
			width="200"
			id="drawer"
		>
			<v-btn text @click="search('Beginners')">Beginners</v-btn>
			<v-btn text @click="search('Close Up')">Close Up</v-btn>
			<v-btn text @click="search('Cards')">Cards</v-btn>
			<v-btn text @click="search('Coins')">Coins</v-btn>
			<v-btn text @click="search('Mental')">Mental</v-btn>
			<v-btn text @click="search('BigShows')">BigShows</v-btn>
			<v-btn text @click="search('DvD')">DvD</v-btn>
			<v-btn text @click="search('Books')">Books</v-btn>
			<v-btn text @click="search('Playing Cards')">Playing Cards</v-btn>
			<v-btn text @click="search('Accessories')">Accessories</v-btn>
			<v-btn text @click="search('Promotion')">Promotion</v-btn>
		</v-navigation-drawer>
		<div v-if="showCart">
			<Cart @my-click-outside="toggleShowCart" />
		</div>
	</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Cart from './Cart';
export default {
	name: 'NavBar',
	components: { Cart },
	data() {
		return {
			route: '/',
			drawer: null,
			goDark: true,
			showCart: false,
		};
	},
	computed: {
		...mapState(['users']),
		...mapState(['cart']),
		...mapGetters(['cartItemsLength']),
	},
	methods: {
		profile() {
			this.$router.push('/profile');
			this.route = '/profile';
		},
		toggleShowCart(val) {
			this.showCart = !this.showCart;
		},
		logOut() {
			this.$store.dispatch('logout').then(() => {
				this.$router.push('/');
			});
		},
		goHome() {
			this.$router.push('/');
			this.route = '/';
		},
		goCatalog() {
			this.$router.push('/catalog');
			this.route = '/catalog';
		},
		goSignin() {
			this.$router.push('/signin');
		},
		goBeginnerSection() {
			this.$router.push('/beginner');
			this.route = '/beginner';
		},
		search(event) {
			if (this.route === '/catalog') {
				this.$store.dispatch('filterBy', event);
			} else {
				const me = this;
				this.$router.push('/catalog').then(() => {
					me.route = '/catalog';
					me.$store.dispatch('filterBy', event);
				});
			}
		},
	},
	watch: {
		group() {
			this.drawer = false;
		},
	},
};
</script>

<style scoped>
.span {
	color: orange;
}
#nav {
	background-color: #1e1e1e;
}
</style>
