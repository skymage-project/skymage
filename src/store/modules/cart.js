export const state = { itemsToCart: [], showCart: false };
export const mutations = {
	ADD_ITEM_TO_CART: (state, payload) => {
		state.itemsToCart.push(payload);
	},
	TOGGLE_CART: (state) => {
		state.showCart = !state.showCart;
	},
};
export const actions = {
	addToCart({ commit }, payload) {
		commit('ADD_ITEM_TO_CART', payload);
	},
	toggleCart({ commit }) {
		commit('TOGGLE_CART');
	},
};
export const getters = {
	cartItemsLength: (state) => {
		return state.itemToCart.length;
	},
};
