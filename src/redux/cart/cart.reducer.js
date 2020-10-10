import { CartActionTypes } from "./cart.type";
import {
  addItemToCart,
  removeItemFromCart,
  increaseQuantityToCartItem,
  decreaseQuantityToCartItem,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseQuantityToCartItem(state.cartItems, action.payload),
      };
    case CartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityToCartItem(state.cartItems, action.payload),
      };
    default:
      return INITIAL_STATE;
  }
};

export default cartReducer;
