import {
  ADD_SHOPPING_CART_TYPE,
  REMOVE_SHOPPING_CART_TYPE,
} from "../types/appReducer";

export const addToCart = (id) => (dispatch) =>
  dispatch({
    type: ADD_SHOPPING_CART_TYPE,
    payload: id,
  });

export const removeToCart = (id) => (dispatch) =>
  dispatch({
    type: REMOVE_SHOPPING_CART_TYPE,
    payload: id,
  });
