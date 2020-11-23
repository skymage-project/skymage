import Vue from "vue";
import Vuex from "vuex";
import userAuth from "../service/user.service";
import Swal from "sweetalert2";
Vue.use(Vuex);
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
export default new Vuex.Store({
  state: {
    initialState,
    tricks: [],
  },
  mutations: {
    FETCH_TRICKS: (state, payload) => {
      state.tricks = payload;
    },
    FILTER_DECREASE: (state) => {
      state.tricks.sort((a, b) => b.price - a.price);
    },
    FILTER_INCREASE: (state) => {
      state.tricks.sort((a, b) => a.price - b.price);
    },
    FILTER_DIFFICULTY: (state, payload) => {
      state.tricks = state.tricks.filter((item) => {
        item.difficulty === payload;
      });
    },
    FILTER_CATEGORY: (state, payload) => {
      state.tricks = state.tricks.filter((item) => {
        item.category === payload;
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
        icon: "error",
        title: "Failed! Email or Password is not valid!",
        showConfirmButton: false,
        timer: 2500,
      });
    },

    registerSuccess(state) {
      Swal.fire({
        icon: "success",
        title: "You are registered",
        showConfirmButton: false,
        timer: 2000,
      });
      state.initialState.status.loggedIn = false;
    },

    registerFailure(state) {
      Swal.fire({
        icon: "error",
        title: "Failed! Email is already in use!",
        showConfirmButton: false,
        timer: 2500,
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
        commits("FILTER_DECREASE");
      } else if (event === "price: increasing order") {
        commits("FILTER_INCREASE");
      } else if (["Easy", "Intermediate", "Hard"].includes(event)) {
        commits("FILTER_DIFFICULTY", event);
      } else {
        commits("FILTER_CATEGORY", event);
      }
    },

    fetchTricks({ commit }) {
      var tricks = [
        {
          id: 1,
          category: "Cards",
          name: "Borrowed Vape Through Bills(closeUp) ",
          quickDescription:
            "Object through bill effects are incredible, but they all have one flaw.",
          urlVideos: "https://j.gifs.com/oVxynX.gif",
          urlPictures: "https://j.gifs.com/oVxynX.gif",
          price: 14.95,
          difficulty: "Easy",
          author: "Alex",
          description:
            "With the VAPE THRUU gimmick, you'll be able to borrow both objects (JUUL & BILL) making it completely universal.",
        },
        {
          id: 2,
          category: "Close Up",
          name: "TSA by Adam Wilber",
          quickDescription:
            "Object through bill effects are incredible, but they all have one flaw.",
          urlVideos: "https://j.gifs.com/oVxynX.gif",
          urlPictures: "https://j.gifs.com/vlG9AM.gif",
          price: 225.95,
          difficulty: "Hard",
          author: "Adam Wilber",
          description: "Vanish bag",
        },
        {
          id: 3,
          category: "BigShows",
          name: "TSA by Adam Wilber",
          quickDescription:
            "Object through bill effects are incredible, but they all have one flaw.",
          urlVideos: "https://j.gifs.com/oVxynX.gif",
          urlPictures: "https://j.gifs.com/vlG9AM.gif",
          price: 230,
          difficulty: "Intermediate",
          author: "Adam Wilber",
          description: "Vanish bag",
        },
      ];
      commit("FETCH_TRICKS", tricks);
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
  },

  modules: {},
});
