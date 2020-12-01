import axios from 'axios';

export const addToWishList = (addWish) => {
	return axios
		.post('http://localhost:3000/items/addItemToWishList', {
			UserId: addWish.UserId,
			ItemId: addWish.ItemId,
		})
		.then((response) => {
			return response;
		});
};

export const RemoveFromWishList = (UserId, ItemId) => {
	//let user = JSON.parse(localStorage.getItem('user'));
};
