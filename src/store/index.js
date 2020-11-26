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
    displayedTricks: [],
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

    loginSuccess(state, user) {
      state.initialState.status.loggedIn = true;
      state.initialState.user = user;
    },

    loginFailure(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
      Swal.fire({
        icon: "error",
        title: `Failed! 
					Email or Password is not valid!
					 Or try to verify your account from your email`,
        showConfirmButton: false,
        timer: 3000,
      });
    },

    registerSuccess(state) {
      Swal.fire({
        icon: "success",
        title: "You are registered",
        showConfirmButton: false,
        timer: 3000,
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
      axios.get("http://localhost:3000/items")
        .then(res => {
          commit('GET_ITEMS', res.data)
        })
    },

    // fetchTricks({ commit }) {
    //   var tricks = [
    //     {
    //       id: 1,
    //       "category": "Cards",
    //       "name": "Borrowed Vape Through Bills(closeUp) ",
    //       "quickDescription":
    //         "Object through bill effects are incredible, but they all have one flaw.",
    //       "urlVideos": "https://j.gifs.com/oVxynX.gif",
    //       "urlPictures": "https://j.gifs.com/oVxynX.gif",
    //       "price": "14.95",
    //       "difficulty": "Beginner",
    //       "author": "Beginner",
    //       "text":
    //         "With the VAPE THRUU gimmick, you'll be able to borrow both objects (JUUL & BILL) making it completely universal.",
    //       "title": "Borrowed Vape Through Bills(closeUp)"
    //     },

    //     {
    //       id: 2,
    //       "category": "DvD",
    //       "name": "Bernard Bilis LIVE (Penguin LIVE)",
    //       "quickDescription":
    //         "Previously unseen card magic with beautiful sleights and perfectly choreographed misdirection.",
    //       "urlVideos":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/13315a-5951709e5448e.jpg",
    //       "urlPictures":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/13315a-5951709e5448e.jpg",
    //       "price": 29,
    //       "difficulty": "Intermediate",
    //       "author": "Bernard Billis",
    //       "text": "Live Lecture",
    //       "title": "Bernard Bilis LIVE (Penguin LIVE)"
    //     },
    //     {
    //       id: 3,
    //       "category": "Coins",
    //       "name":
    //         "Extreme Burn 2.0 (Locked and Loaded) by Richard Sanders (Magical Changing Money Prank)",
    //       "quickDescription":
    //         "One of our all-time best sellers. The most visual bill-change EVER. Lightning fast, and completely examinable.",
    //       "urlVideos":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/5249b-55d61ad0e09ef.png",
    //       "urlPictures": "https://j.gifs.com/Gv32L5.gif",
    //       "price": "15",
    //       "difficulty": "Beginner",
    //       "author": "Adam Wilber",
    //       "text":
    //         "You will learn 10 unique, hyper-visual changes; giving you an army of devastating bill changes to do in literally any situation imaginable. No stone is left unturned, from setting up the bills to performing the changes, and all the handling tips and subtleties in-between. You will be up and running in no time. AND as a special BONUS, you'll learn Richard's underground miracle, Slow Burn. They'll flip-out as they watch bills visually morph, while you slowly pass your hand over them! PLUS 75 MINUTES OF BRAND NEW MATERIAL that will allow you to change the bills and then hand them out for examination, spend them, etc. A total of almost 3 hours of killer magic on one remarkable DVD.",
    //       "title": "Extreme Burn 2.0 (Locked and Loaded) by Richard Sanders (Magical Changing Money Prank)"
    //     },
    //     {
    //       id: 4,
    //       "category": "Accessories",
    //       "name": "Invisible Writer (Pencil Lead) by Vernet",
    //       "quickDescription":
    //         "ernet Magic has the most complete line of writers. But there was one missing, until now -- a writer undetectable under conditions of high scrutiny.",
    //       "urlVideos":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/17455a-5db86ff254717.png",
    //       "urlPictures":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/17455a-5db86fed16de2.png",
    //       "price": "18",
    //       "difficulty": "Advanced",
    //       "author": "Vernet",
    //       "text": "Thumb Tip",
    //       "title": "Invisible Writer (Pencil Lead) by Vernet"
    //     },
    //     {
    //       id: 5,
    //       "category": "Mental",
    //       "name": "How to Read Minds Kit",
    //       "quickDescription":
    //         "Yes you can. The kit includes over 20 techniques that you can use to improve every aspect of your life.",
    //       " urlVideos":
    //         "https://ksr-ugc.imgix.net/assets/027/438/990/9f1eb3b10e2856b3a0bcb6f8af9e998e_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1575649462&auto=format&frame=1&q=92&s=f640ccdb1322fece0aae15176eada760",
    //       "urlPictures": "https://j.gifs.com/OM32OR.gif",
    //       "price": "119",
    //       "difficulty": "Beginner",
    //       "author": "Peter Turner",
    //       "text": "Mentalist For Beginner",
    //       "title": "How to Read Minds Kit"
    //     },
    //     {
    //       id: 6,
    //       "category": "Mental",
    //       "name": "Naked By Pablo Amira",
    //       "quickDescription":
    //         "Their THOUGHT OF card appears within a completely BLANK deck.",
    //       "urlVideos":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/7736a-529f6035669cc.jpg",
    //       "urlPictures":
    //         "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/7736a-529f6035669cc.jpg",
    //       "price": "29",
    //       "difficulty": "Advanced",
    //       "author": "Pablo Amira",
    //       "text": `ou approach the audience with a "naked" deck of cards. The deck is shown to be blank both back and front. A spectator is asked to name a card - any card - a completely free choice. The cards are spread through once more and a single back appears nestled among the sea of blanks.
    //       The card is turned over to reveal - the spectator's selection!
                
    //             No force of any kind.
    //             No rough and smooth.
    //             No difficult moves.",`,
    //       "title": "How to Read Minds Kit"
    //     },
    //     {
    //       id: 7,
    //       "category": "Beginners",
    //       "name": "Optix",
    //       "quickDescription":
    //         "Optix isn't restricted by the ability to use only one kind of phone, it's universal. Borrow a spectators phone, then hand them your phone to film the magic... In an instant, their phone vanishes into thin air. No sleeves. No pulls. GONE.",
    //       "urlVideos":
    //         "https://ae01.alicdn.com/kf/Hfe4f1013379b40cf9dcdca5b661b2800K/Optix-by-Tobias-Dostal-Magic-tricks.jpg",
    //       "urlPictures":
    //         "https://ae01.alicdn.com/kf/Hfe4f1013379b40cf9dcdca5b661b2800K/Optix-by-Tobias-Dostal-Magic-tricks.jpg",
    //       "price": "69",
    //       "difficulty": "Beginner",
    //       "author": "Tobias Dostal",
    //       "text": "Vanish bag",
    //       "title": "Optix"
    //     },
    //     {
    //       id: 8,
    //       "category": "Close Up",
    //       "name": "TSA by Adam Wilber",
    //       "quickDescription":
    //         "Object through bill effects are incredible, but they all have one flaw.",
    //       "urlVideos": "https://j.gifs.com/oVxynX.gif",
    //       "urlPictures": "https://j.gifs.com/vlG9AM.gif",
    //       "price": "225.95",
    //       "difficulty": "Advanced",
    //       "author": "Adam Wilber",
    //       "text": "Vanish bag",
    //       "title": "TSA by Adam Wilber"
    //     },
    //     {
    //       id: 9,
    //       "category": "Playing Cards",
    //       "name": "Bicycle playing Cards",
    //       "quickDescription": "Our favorite cards.",
    //       "urlVideos":
    //         "https://cdn.shopify.com/s/files/1/0956/5418/products/60380-alt5_grande.png?v=1591631579",
    //       "urlPictures":
    //         "https://cdn.shopify.com/s/files/1/0956/5418/products/60380-alt5_grande.png?v=1591631579",
    //       "price": "30",
    //       "difficulty": "Advanced",
    //       "author": "Adam Wilber",
    //       "text": "Vanish bag",
    //       "title": "Bicycle playing Cards"
    //     },
    //     {
    //       id: 10,
    //       "category": "Books",
    //       "name": "DICTIONNAIRE RAISONNÉ ... XVIIIème Siècle",
    //       "quickDescription":
    //         "Object through bill effects are incredible, but they all have one flaw.",
    //       "urlVideos":
    //         "https://www.magicdream.fr/media/catalog/product/cache/b1dcc1b7ddcba4f7a1e2837af86f3b14/m/a/magie_livre_ancien_bresson_1870.jpg",
    //       "urlPictures":
    //         "https://www.magicdream.fr/media/catalog/product/cache/b1dcc1b7ddcba4f7a1e2837af86f3b14/m/a/magie_livre_ancien_bresson_1870.jpg",
    //       "price": "3000",
    //       "difficulty": "Intermediate",
    //       "author": "Adam Wilber",
    //       "text": "Vanish bag",
    //       "title": "DICTIONNAIRE RAISONNÉ ... XVIIIème Siècle"
    //     },
    //   ];
    //   commit("FETCH_TRICKS", tricks);
    // },
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

  modules: { cart },
});
