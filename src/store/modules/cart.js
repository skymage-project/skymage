export const state = { itemToCart: [] };
export const mutations = {
	ADD_ITEM_TO_CART: (state, payload) => {
		state.itemToCart.push(payload);
	},
};
export const actions = {
	addToCart({ commit }, payload) {
		commit('ADD_ITEM_TO_CART', payload);
	},
};
export const getters = {};
