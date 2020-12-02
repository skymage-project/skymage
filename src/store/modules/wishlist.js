import * as wishlistService from '../../service/wishlist.js';

export const state = { wishlistItems: [] };
export const mutations = {
	UPDATE_WISHLIST_ITEMS: (state, payload) => {
		state.wishListItems = payload;
	},
};
export const actions = {
	addToWishList(_, addWish) {
		wishlistService.addToWishList(addWish);
	},
	removeFromWishList(_, removeWish) {
		wishlistService.removeFromWishList(removeWish).then((response) => {
			response;
		});
	},
	fetchWishList({ commit }, UserId) {
		wishlistService.fetchWishList(UserId).then((wishListItems) => {
			commit('UPDATE_WISHLIST_ITEMS', wishListItems);
		});
	},
};
export const getters = {
	getWishListItems: (state) => {
		return state.wishListItems;
	},
};
