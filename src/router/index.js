import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import Signin from '../views/Signin.vue';
import Profile from '../views/Profile.vue';
import PurchaseProcess from '../views/PurchaseProcess.vue';
import ItemDetailed from '../views/ItemDetailed.vue';
import BeginnerSection from '../views/BeginnerSection.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},

	{
		path: '/catalog',
		name: 'Catalog',
		component: Catalog,
	},
	{
		path: '/signin',
		name: 'Signin',
		component: Signin,
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
	},
	{
		path: '/purchaseprocess',
		name: 'PurchaseProcess',
		component: PurchaseProcess,
	},
	{
		path: '/itemDetailed/:id',
		name: 'ItemDetailed',
		component: ItemDetailed,
		props: true,
	},
	{
		path: '/beginner',
		name: 'BeginnerSection',
		component: BeginnerSection,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
