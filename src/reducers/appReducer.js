import {
  ADD_SHOPPING_CART_TYPE,
  REMOVE_SHOPPING_CART_TYPE,
} from "../types/appReducer";

const INITIAL_STATE = {
  shoppingCart: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SHOPPING_CART_TYPE:
      state.shoppingCart.push(action.payload);
      return state;

    case REMOVE_SHOPPING_CART_TYPE:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (item) => item !== action.payload
        ),
      };

    default:
      return state;
  }
};
