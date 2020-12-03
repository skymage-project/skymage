import axios from 'axios';

export const addToWishList = (addWish) => {
	return axios
		.post('http://localhost:3000/items/addItemToWishList', {
			UserId: addWish.UserId,
			ItemId: addWish.ItemId,
		})
		.then((response) => {
			console.log(response);
			return response;
		});
};

export const removeFromWishList = (removeWish) => {
	console.log(removeWish);
	return axios.delete('http://localhost:3000/items/removeItemFromWishList', {
		data: {
			UserId: removeWish.UserId,
			ItemId: removeWish.ItemId,
		},
	});
};

export const fetchWishList = (UserId) => {
	return axios
		.post('http://localhost:3000/items/fetchWishList', {
			UserId: UserId,
		})
		.then((response) => {
			return response.data;
		});
};

export const fetchWishListItems = (ArrayOfItems) => {
	return axios
		.post('http://localhost:3000/items/fetchItemsWishList', {
			ArrayOfItems,
		})
		.then((response) => {
			return response.data;
		});
};
