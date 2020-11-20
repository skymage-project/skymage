import axios from 'axios';



export default {
    
    login (user) {
        console.log('user service')
    return axios
      .post('http://localhost:3000/user/signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  },

  logout () {
    localStorage.removeItem('user');
  },

   register (user) {
    return axios.post('http://localhost:3000/user/signup', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
        phoneNumber: user.phoneNumber,
    });
  }
}