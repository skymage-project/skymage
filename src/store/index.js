import Vue from 'vue';
import Vuex from 'vuex';
import userAuth from '../service/user.service';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as cart from './modules/cart';
Vue.use(Vuex);
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
	? { status: { loggedIn: true }, user }
	: { status: { loggedIn: false }, user: null };
export default new Vuex.Store({
	state: {
		initialState,
		tricks: [],
		displayedTricks: [],
	},
	mutations: {
		// FETCH_TRICKS: (state, payload) => {
		//   state.tricks = payload;
		//   state.displayedTricks = payload;
		// },
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
		UPDATE_PROFILE_PIC: (state, payload) => {
			state.initialState.user = payload;
		},

		loginSuccess(state, user) {
			state.initialState.status.loggedIn = true;
			state.initialState.user = user;
		},

		loginFailure(state) {
			state.initialState.status.loggedIn = false;
			state.initialState.user = null;
			Swal.fire({
				icon: 'error',
				title: 'Failed!',
				text: `Email or Password is not valid!
					 Or activate your account from your email`,
			});
		},

		registerSuccess(state) {
			Swal.fire({
				icon: 'success',
				title: 'You are registered',
				text:
					'Please activate your account from the verification email we sent you',
			});
			state.initialState.status.loggedIn = false;
		},

		registerFailure(state) {
			Swal.fire({
				icon: 'error',
				title: 'Failed! Email is already in use!',
			});
			state.initialState.status.loggedIn = false;
		},

		logout(state) {
			state.initialState.status.loggedIn = false;
			state.initialState.user = null;
		},
	},
	actions: {
		filterBy({ commit }, event) {
			if (event === 'price: decreasing order') {
				commit('FILTER_DECREASE');
			} else if (event === 'price: increasing order') {
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

		login({ commit }, user) {
			return userAuth.login(user).then(
				(user) => {
					commit('loginSuccess', user);
					return Promise.resolve(user);
				},
				(error) => {
					commit('loginFailure');
					return Promise.reject(error);
				}
			);
		},

		register({ commit }, user) {
			return userAuth.register(user).then(
				(response) => {
					commit('registerSuccess');
					return Promise.resolve(response.data);
				},
				(error) => {
					commit('registerFailure');
					return Promise.reject(error);
				}
			);
		},

		logout({ commit }) {
			userAuth.logout();
			commit('logout');
		},

		updateProfilePic({ commit }, img) {
			return userAuth
				.updateProfilePic(img, initialState.user.id)
				.then((result) => {
					const newUser = JSON.parse(localStorage.getItem('user'));
					newUser.img = result.data.url;
					commit('UPDATE_PROFILE_PIC', newUser);
					localStorage.setItem('user', JSON.stringify(newUser));
				})
		},
	},

	modules: { cart },
});
