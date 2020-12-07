import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as cart from './modules/cart';
import * as wishlist from './modules/wishlist';
import * as purchase from './modules/purchase';
import * as users from './modules/users';
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		tricks: [],
		displayedTricks: [],
	},
	mutations: {
		FILTER_DECREASE: (state) => {
			state.displayedTricks.sort((a, b) => b.price - a.price);
		},
		FILTER_INCREASE: (state) => {
			state.displayedTricks.sort((a, b) => a.price - b.price);
		},
		FILTER_DIFFICULTY: (state, payload) => {
			state.displayedTricks = state.tricks.filter(
				(item) => item.difficulty === payload
			);
		},
		RESET_ALL: (state) => {
			state.displayedTricks = state.tricks;
		},
		FILTER_CATEGORY: (state, payload) => {
			state.displayedTricks = state.tricks.filter(
				(item) => item.category === payload
			);
		},
		GET_ITEMS: (state, payload) => {
			state.tricks = payload;
			state.displayedTricks = state.tricks.slice();
		},
		
	},
	actions: {
		filterBy({ commit }, event) {
			if (event === 'Price: decreasing order') {
				commit('FILTER_DECREASE');
			} else if (event === 'Price: increasing order') {
				commit('FILTER_INCREASE');
			} else if (['Beginner', 'Intermediate', 'Advanced'].includes(event)) {
				commit('FILTER_DIFFICULTY', event);
			} else if (['All'].includes(event)) {
				commit('RESET_ALL', event);
			} else {
				commit('FILTER_CATEGORY', event);
			}
		},
		getItems({ commit }) {
			axios.get('http://localhost:3000/items').then((res) => {
				commit('GET_ITEMS', res.data);
			});
		},

	},
	getters: {
		getTricks: (state) => {
			return state.tricks;
		},
	},
	modules: { cart, purchase, wishlist,users},
});
