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
	REMOVE_ITEM_FROM_CART: (state, payload) => {
		for (var i = 0; i < state.itemsToCart.length; i++) {
			if (payload === state.itemsToCart[i].id) {
				state.itemsToCart.splice(i, 1);
				break;
			}
		}
	},
};
export const actions = {
	addToCart({ commit }, payload) {
		commit('ADD_ITEM_TO_CART', payload);
	},
	toggleCart({ commit }) {
		commit('TOGGLE_CART');
	},
	removeFromCart({ commit }, payload) {
		commit('REMOVE_ITEM_FROM_CART', payload);
	},
};
export const getters = {
	cartItemsLength: (state) => {
		return state.itemsToCart.length;
	},
	getTotalCartPrice: (state) => {
		var price = 0;
		for (var i = 0; i < state.itemsToCart.length; i++) {
			price += state.itemsToCart[i].price * state.itemsToCart[i].quantity;
		}
		return price;
	},
};
