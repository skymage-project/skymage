import axios from 'axios';

export default {
	login(user) {
		return axios
			.post('http://localhost:3000/user/signin', {
				email: user.email,
				password: user.password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem('user', JSON.stringify(response.data));
				}

				return response.data;
			});
	},

	updateProfilePic(img, id) {
		const fd = new FormData();
		fd.append('image', img);
		return axios.put(`http://localhost:3000/user/upload/${id}`, fd, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	},

	logout() {
		return localStorage.removeItem('user');
	},

	register(user) {
		return axios.post('http://localhost:3000/user/signup', {
			firstName: user.firstName,
			lastName: user.lastName,
			password: user.password,
			email: user.email,
			dateOfBirth: user.dateOfBirth,
			country: user.country,
			phoneNumber: user.phoneNumber,
			status: 'client',
			access: false,
			img: user.img,
			address: user.address,
			company: user.company,
			addressOptional: user.addressOptional,
			postalCode: user.postalCode,
			city: user.city,
			shippingRate: user.shippingRate,
			creditCardNumber: user.creditCardNumber,
			expirationCardDate: user.expirationCardDate,
			securityCode: user.securityCode,
		});
	},
};
