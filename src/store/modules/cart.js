export const state = { itemsToCart: [], showCart: false };
export const mutations = {
	ADD_ITEM_TO_CART: (state, payload) => {
		let itemExist = false;
		for (var i = 0; i < state.itemsToCart.length; i++) {
			if (payload.id === state.itemsToCart[i].id) {
				state.itemsToCart[i].quantity += payload.quantity;
				itemExist = true;
				break;
			}
		}
		!itemExist ? state.itemsToCart.push(payload) : 0;
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
