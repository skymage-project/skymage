<template>
	<v-app>
		<div>
			<NavBar />
			<router-view />
			<Footer />
		</div>
	</v-app>
</template>
<script>
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
	},
	data: () => ({
		loading: true,
	}),
	created() {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			Promise.all([
				this.$store.dispatch('getItems'),
				this.$store.dispatch('fetchWishList', user.id),
			]).finally(() => {
				this.loading = false;
			});
		} else {
			this.$store.dispatch('getItems');
		}
	},
};
</script>
