import { SHOPPING_CART_TYPE } from "../types/appReducer";

const INITIAL_STATE = {
  shoppingCart: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOPPING_CART_TYPE:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };

    default:
      return state;
  }
};
