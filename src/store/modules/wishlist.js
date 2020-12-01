import * as wishlistService from '../../service/wishlist.js';

export const state = {};
export const mutations = {};
export const actions = {
	addToWishList(_, addWish) {
		wishlistService.addToWishList(addWish);
	},
};
export const getters = {};
