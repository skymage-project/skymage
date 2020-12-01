import Vue from "vue";
import Vuex from "vuex";
import userAuth from "../service/user.service";
import axios from "axios";
import Swal from "sweetalert2";
import * as cart from "./modules/cart";
Vue.use(Vuex);
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
export default new Vuex.Store({
  state: {
    initialState,
    tricks: [],
    displayedTricks: [
      {
        id: 1,
        category: "Cards",
        name: "D4M",
        quickDescription:
          "D4M est un effet de carte déchirée et restaurée incroyablement visuel et unique. Il est entièrement examinable et laisse à vos spectateurs un souvenir qu'ils voudront garder et montrer pour toujours.",
        urlVideos:
          '<iframe width="1143" height="643" src="https://www.youtube.com/embed/N05hau_70F4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        urlPictures: [
          "https://www.bigmagie.com/6322-large_default/d4m-matthew-wright.jpg",
          "https://www.bigmagie.com/6323-large_default/d4m-matthew-wright.jpg",
          "https://www.bigmagie.com/6324-thickbox_default/d4m-matthew-wright.jpg",
        ],
        price: "14.95",
        difficulty: "Beginner",
        author: "Beginner",
        quantity: "10",
        descriptionText:
          "Un spectateur sélectionne une carte, qui peut être entièrement inspectée. Elle est ensuite marquée pour identification. Le magicien la déchire en morceaux et, de façon inexplicable, les remet en place avec deux des morceaux inversés. Hyper visuel et examinable instantanément. Avec des instructions de téléchargement complètes et détaillées, aucun détail explicatif n'a été omis et de nombreuses idées de présentation et de routines sont explorées. Il s'agit véritablement d'un chef-d'œuvre de magie moderne que vous serez fier de pouvoir présenter dans le cadre de votre répertoire de travail. D4M est conçu pour être un worker. Avec un temps de préparation de quelques secondes seulement et des contraintes d'angles réduites au minimum, D4M est parfait pour le close-up, le salon et même sur scène. Cette routine est directement issue du numéro de Matthew à la FISM et a été plébiscitée par les magiciens du monde entier.",
        descriptionTitle: "DESCRIPTION",
        descriptionInstruction: "descriptionInstruction",
      },
      {
        id: 2,
        category: "Cards",
        name: "D4M",
        quickDescription:
          "D4M est un effet de carte déchirée et restaurée incroyablement visuel et unique. Il est entièrement examinable et laisse à vos spectateurs un souvenir qu'ils voudront garder et montrer pour toujours.",
        urlVideos:
          '<iframe width="1143" height="643" src="https://www.youtube.com/embed/N05hau_70F4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        urlPictures: [
          "https://www.bigmagie.com/6322-large_default/d4m-matthew-wright.jpg",
          "https://www.bigmagie.com/6323-large_default/d4m-matthew-wright.jpg",
          "https://www.bigmagie.com/6324-thickbox_default/d4m-matthew-wright.jpg",
        ],
        price: "14.95",
        difficulty: "Beginner",
        author: "Beginner",
        quantity: "10",
        descriptionText:
          "Un spectateur sélectionne une carte, qui peut être entièrement inspectée. Elle est ensuite marquée pour identification. Le magicien la déchire en morceaux et, de façon inexplicable, les remet en place avec deux des morceaux inversés. Hyper visuel et examinable instantanément. Avec des instructions de téléchargement complètes et détaillées, aucun détail explicatif n'a été omis et de nombreuses idées de présentation et de routines sont explorées. Il s'agit véritablement d'un chef-d'œuvre de magie moderne que vous serez fier de pouvoir présenter dans le cadre de votre répertoire de travail. D4M est conçu pour être un worker. Avec un temps de préparation de quelques secondes seulement et des contraintes d'angles réduites au minimum, D4M est parfait pour le close-up, le salon et même sur scène. Cette routine est directement issue du numéro de Matthew à la FISM et a été plébiscitée par les magiciens du monde entier.",
        descriptionTitle: "DESCRIPTION",
        descriptionInstruction: "descriptionInstruction",
      },
      {
        id: 3,
        category: "Cards",
        name: "D4M",
        quickDescription:
          "D4M est un effet de carte déchirée et restaurée incroyablement visuel et unique. Il est entièrement examinable et laisse à vos spectateurs un souvenir qu'ils voudront garder et montrer pour toujours.",
        urlVideos:
          '<iframe width="1143" height="643" src="https://www.youtube.com/embed/N05hau_70F4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        urlPictures: [
          "https://www.bigmagie.com/6322-large_default/d4m-matthew-wright.jpg",
          "https://www.bigmagie.com/6323-large_default/d4m-matthew-wright.jpg",
          "https://www.bigmagie.com/6324-thickbox_default/d4m-matthew-wright.jpg",
        ],
        price: "14.95",
        difficulty: "Beginner",
        author: "Beginner",
        quantity: "10",
        descriptionText:
          "Un spectateur sélectionne une carte, qui peut être entièrement inspectée. Elle est ensuite marquée pour identification. Le magicien la déchire en morceaux et, de façon inexplicable, les remet en place avec deux des morceaux inversés. Hyper visuel et examinable instantanément. Avec des instructions de téléchargement complètes et détaillées, aucun détail explicatif n'a été omis et de nombreuses idées de présentation et de routines sont explorées. Il s'agit véritablement d'un chef-d'œuvre de magie moderne que vous serez fier de pouvoir présenter dans le cadre de votre répertoire de travail. D4M est conçu pour être un worker. Avec un temps de préparation de quelques secondes seulement et des contraintes d'angles réduites au minimum, D4M est parfait pour le close-up, le salon et même sur scène. Cette routine est directement issue du numéro de Matthew à la FISM et a été plébiscitée par les magiciens du monde entier.",
        descriptionTitle: "DESCRIPTION",
        descriptionInstruction: "descriptionInstruction",
      },
    ],
  },
  mutations: {
    // FETCH_TRICKS: (state, payload) => {
    //   state.tricks = payload;
    //   state.displayedTricks = payload;
    // },
    FILTER_DECREASE: (state) => {
      state.displayedTricks.sort((a, b) => b.price - a.price);
    },
    FILTER_INCREASE: (state) => {
      state.displayedTricks.sort((a, b) => a.price - b.price);
    },
    FILTER_DIFFICULTY: (state, payload) => {
      state.displayedTricks = state.tricks.filter(
        (item) => item.difficulty === payload
      );
    },
    RESET_ALL: (state) => {
      state.displayedTricks = state.tricks;
    },
    FILTER_CATEGORY: (state, payload) => {
      state.displayedTricks = state.tricks.filter(
        (item) => item.category === payload
      );
    },
    GET_ITEMS: (state, payload) => {
      state.tricks = payload;
      state.displayedTricks = state.tricks.slice();
    },
    UPDATE_PROFILE_PIC: (state, payload) => {
      state.initialState.user = payload;
    },

    loginSuccess(state, user) {
      state.initialState.status.loggedIn = true;
      state.initialState.user = user;
    },

    loginFailure(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: `Email or Password is not valid!
					 Or activate your account from your email`,
      });
    },

    registerSuccess(state) {
      Swal.fire({
        icon: "success",
        title: "You are registered",
        text:
          "Please activate your account from the verification email we sent you",
      });
      state.initialState.status.loggedIn = false;
    },

    registerFailure(state) {
      Swal.fire({
        icon: "error",
        title: "Failed! Email is already in use!",
      });
      state.initialState.status.loggedIn = false;
    },

    logout(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },
  },
  actions: {
    filterBy({ commit }, event) {
      if (event === "price: decreasing order") {
        commit("FILTER_DECREASE");
      } else if (event === "price: increasing order") {
        commit("FILTER_INCREASE");
      } else if (["Beginner", "Intermediate", "Advanced"].includes(event)) {
        commit("FILTER_DIFFICULTY", event);
      } else if (["All"].includes(event)) {
        commit("RESET_ALL", event);
      } else {
        commit("FILTER_CATEGORY", event);
      }
    },
    getItems({ commit }) {
      axios.get("http://localhost:3000/items").then((res) => {
        commit("GET_ITEMS", res.data);
      });
    },

    login({ commit }, user) {
      return userAuth.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },

    register({ commit }, user) {
      return userAuth.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },

    logout({ commit }) {
      userAuth.logout();
      commit("logout");
    },

    updateProfilePic({ commit }, img) {
      return userAuth
        .updateProfilePic(img, initialState.user.id)
        .then((result) => {
          const newUser = JSON.parse(localStorage.getItem("user"));
          newUser.img = result.data.url;
          localStorage.setItem("user", JSON.stringify(newUser));
        })
        .then((user) => {
          commit("UPDATE_PROFILE_PIC", user);
        });
    },
  },

  modules: { cart },
});
