import userAuth from '../../service/user.service';
import Swal from 'sweetalert2';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
	? { status: { loggedIn: true }, user }
	: { status: { loggedIn: false }, user: null };

export const state = {initialState};
export const mutations = {
    UPDATE_PROFILE_PIC: (state, payload) => {
        state.initialState.user = payload;
    },

    SEND_MESSAGE: (state, payload) => {
        Swal.fire({
            icon: 'success',
            text: 'Thank you! We will answer you as soon as we can',
        });
    },

    loginSuccess(state, user) {
        state.initialState.status.loggedIn = true;
        state.initialState.user = user;
    },

    loginFailure(state) {
        state.initialState.status.loggedIn = false;
        state.initialState.user = null;
        Swal.fire({
            icon: 'error',
            title: 'Failed!',
            text: `Email or Password is not valid!
                 Or activate your account from your email`,
        });
    },

    registerSuccess(state) {
        Swal.fire({
            icon: 'success',
            title: 'You are registered',
            text:
                'Please activate your account from the verification email we sent you',
        });
        state.initialState.status.loggedIn = false;
    },

    registerFailure(state) {
        Swal.fire({
            icon: 'error',
            title: 'Failed! This email is already in use!',
        });
        state.initialState.status.loggedIn = false;
    },

    logout(state) {
        state.initialState.status.loggedIn = false;
        state.initialState.user = null;
    },
    REGISTER_UPDATED() {},
    PURCHASE_UPDATED() {
        Swal.fire({
            icon: 'success',
            text: 'Your purchase is done successfully',
        });
  },
};
export const actions = {
    login({ commit }, user) {
        return userAuth.login(user).then(
            (user) => {
                commit('loginSuccess', user);
                return Promise.resolve(user);
            },
            (error) => {
                commit('loginFailure');
                return Promise.reject(error);
            }
        );
    },

    register({ commit }, user) {
        return userAuth.register(user).then(
            (response) => {
                commit('registerSuccess');
                return Promise.resolve(response.data);
            },
            (error) => {
                commit('registerFailure');
                return Promise.reject(error);
            }
        );
    },

    logout({ commit }) {
        userAuth.logout();
        commit('logout');
    },

    updateProfilePic({ commit }, img) {
        console.log('updateaction')
        return userAuth
            .updateProfilePic(img, initialState.user.id)
            .then((result) => {
                const newUser = JSON.parse(localStorage.getItem('user'));
                newUser.img = result.data.url;
                commit('UPDATE_PROFILE_PIC', newUser);
                localStorage.setItem('user', JSON.stringify(newUser));
            });
    },
    sendMessage({ commit }, message) {
        userAuth.sendMessage(message).then(() => {
            commit('SEND_MESSAGE');
        });
    },

    updateRegister({ commit},user){
        return userAuth.updateRegister(user).then(() => {
            commit('REGISTER_UPDATED');
        })
    },
    updatePurchase({ commit }, user) {
        return userAuth.updatePurchase(user).then(() => {
            commit('PURCHASE_UPDATED');
        });
    },
};
export const getters = {

};