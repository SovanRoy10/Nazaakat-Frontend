import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      let cart = JSON.stringify(current(state.cart));
      localStorage.setItem("cart", cart);
      // console.log(current(state.cart))
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => action.payload !== cartItem.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeOneFromCart: (state, action) => {
      const indexToRemove = state.cart.findIndex(
        (cartItem) => action.payload === cartItem.id
      );
      if (indexToRemove !== -1) {
        state.cart.splice(indexToRemove, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart : (state,action)=>{
      state.cart = [];
    }
  },
});

export const { addToCart, removeFromCart,removeOneFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
