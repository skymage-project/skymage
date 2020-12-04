import * as wishlistService from '../../service/wishlist.js';

export const state = { wishlistItems: [], wishListTricksInfos: [] };
export const mutations = {
	UPDATE_WISHLIST_ITEMS: (state, payload) => {
		state.wishListItems = payload;
	},
	UPDATE_WISHLIST_ITEMS_INFOS: (state, payload) => {
		state.wishListTricksInfos = payload;
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
			wishlistService
				.fetchWishListItems(wishListItems)
				.then((wishListItemsDetails) => {
					commit('UPDATE_WISHLIST_ITEMS_INFOS', wishListItemsDetails);
				});
		});
	},
};
export const getters = {
	getWishListItems: (state) => {
		return state.wishListItems;
	},
};
