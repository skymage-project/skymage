<template>
	<div>
		<v-app-bar id="nav" :dark="goDark">
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<span @click="goHome"
				><v-toolbar-title> Welcome To SkyMage</v-toolbar-title></span
			>

			<v-toolbar-items>
				<v-btn text @click="goAbout"> <span class="span">About</span></v-btn>
				<v-btn text @click="goCatalog"> <span class="span">Tricks</span></v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-btn text @click="logOut" v-if="loggedIn">
				<span class="span">Logout</span></v-btn
			>

			<v-btn text @click="goSignin" v-else>
				<span class="span">Signin</span></v-btn
			>
			<v-btn>
				<v-badge left color="red">
					<span slot="badge">{{ cart.itemToCart.length }}</span>
					<v-icon>fas fa-shopping-cart</v-icon>
				</v-badge>
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			temporary
			absolute
			width="200"
			id="drawer"
		>
			<v-btn text>Beginners |</v-btn>
			<v-btn text>Close Up</v-btn>
			<v-btn text>Cards |</v-btn>
			<v-btn text>Coins |</v-btn>
			<v-btn text>Mental |</v-btn>
			<v-btn text>BigShows |</v-btn>
			<v-btn text>DvD |</v-btn>
			<v-btn text>Books |</v-btn>
			<v-btn text>Playing Cards |</v-btn>
			<v-btn text>Accessories |</v-btn>
			<v-btn text>Promotion |</v-btn>
		</v-navigation-drawer>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'NavBar',
	data() {
		return {
			route: '/',
			drawer: null,
			goDark: true,
		};
	},
	computed: {
		loggedIn() {
			return this.$store.state.initialState.status.loggedIn;
		},
		...mapState(['cart']),
	},
	methods: {
		logOut() {
			this.$store.dispatch('logout').then(() => {
				if (this.route === '/') {
					this.$router.go();
				} else {
					this.$router.push('/');
				}
			});
		},
		goHome() {
			if (this.route === '/') {
				this.$router.go();
			} else {
				this.$router.push('/');
				this.route = '/';
			}
		},
		goCatalog() {
			if (this.route === '/catalog') {
				this.$router.go();
			} else {
				this.$router.push('/catalog');
				this.route = '/catalog';
			}
		},
		goAbout() {
			if (this.route === '/about') {
				this.$router.go();
			} else {
				this.$router.push('/about');
				this.route = '/about';
			}
		},
		goSignin() {
			this.$router.push('/signin');
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
