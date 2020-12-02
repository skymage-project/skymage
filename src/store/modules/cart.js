export const state = { itemsToCart: [], showCart: false, wishList: [] };
export const mutations = {
  ADD_ITEM_TO_CART: (state, payload) => {
    let itemExist = false;
    for (var i = 0; i < state.itemsToCart.length; i++) {
      if (payload.id === state.itemsToCart[i].id) {
        state.itemsToCart[i].quantity += payload.quantity;
        itemExist = true;
        break;
      }
    }
    !itemExist ? state.itemsToCart.push(payload) : 0;
  },
  DECREASE_ITEM_FROM_CART: (state, payload) => {
    let itemExist = false;
    for (var i = 0; i < state.itemsToCart.length; i++) {
      if (payload.id === state.itemsToCart[i].id) {
        if (state.itemsToCart[i].quantity > 0) {
          state.itemsToCart[i].quantity -= payload.quantity;
          itemExist = true;
          break;
        }
      }
    }
    !itemExist ? state.itemsToCart.splice(payload.id, 1) : 0;
  },
  REMOVE_ITEM_FROM_CART: (state, payload) => {
    for (var i = 0; i < state.itemsToCart.length; i++) {
      if (payload === state.itemsToCart[i].id) {
        state.itemsToCart.splice(i, 1);
        break;
      }
    }
  },
  ADD_ITEM_TO_WISHLIST: (state, payload) => {
    let itemExist = false;
    for (var i = 0; i < state.wishList.length; i++) {
      if (payload.id === state.wishList[i].id) {
        itemExist = true;
        break;
      }
    }
    !itemExist ? state.wishList.push(payload) : 0;
  },
  REMOVE_FROM_WISHES: (state, payload) => {
    for (var i = 0; i < state.wishList.length; i++) {
      if (payload === state.wishList[i].id) {
        state.wishList.splice(i, 1);
      }
    }
  },
};
export const actions = {
  addToCart({ commit }, payload) {
    commit("ADD_ITEM_TO_CART", payload);
  },
  decreaseQuantity({ commit }, payload) {
    commit("DECREASE_ITEM_FROM_CART", payload);
  },
  toggleCart({ commit }) {
    commit("TOGGLE_CART");
  },
  removeFromCart({ commit }, payload) {
    commit("REMOVE_ITEM_FROM_CART", payload);
  },
  addtToWishlist({ commit }, payload) {
    commit("ADD_ITEM_TO_WISHLIST", payload);
  },
  removeFromWishes({ commit }, payload) {
    commit("REMOVE_FROM_WISHES", payload);
  },
};
export const getters = {
  cartItemsLength: (state) => {
    return state.itemsToCart.length;
  },
  getTotalCartPrice: (state) => {
    var price = 0;
    for (var i = 0; i < state.itemsToCart.length; i++) {
      price += state.itemsToCart[i].price * state.itemsToCart[i].quantity;
    }
    return price;
  },
  getItemQuantity: (state) => (id) => {
    var quantity = 0;
    for (var i = 0; i < state.itemsToCart.length; i++) {
      if (itemsToCart[i].id === id) {
        quantity = itemsToCart[i].id;
      }
    }
    return quantity;
  },
};
