<template>
	<v-app>
		<div>
			<NavBar />
			
		</div>
		<router-view />
	</v-app>
</template>
<script>
import NavBar from './components/NavBar';
export default {
	name: 'App',
	components: {
		NavBar
	},
	data: () => ({}),
};
</script>

<style scoped>
/* .divBody{
	background-color: #1e1e1e;
} */
</style>
