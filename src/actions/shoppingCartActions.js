import {
  ADD_SHOPPING_CART_TYPE,
  REMOVE_SHOPPING_CART_TYPE,
} from "../types/appReducer";

export const addToCart = (id) => (dispatch, getState) => {
  const { products } = getState().ProductReducer;

  let product = products.filter((item) => item.id === id);

  dispatch({
    type: ADD_SHOPPING_CART_TYPE,
    payload: product[0],
  });
};

export const removeToCart = (id) => (dispatch) =>
  dispatch({
    type: REMOVE_SHOPPING_CART_TYPE,
    payload: id,
  });
