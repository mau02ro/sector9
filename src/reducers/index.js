import { combineReducers } from "redux";

import AppReducer from "./appReducer";
import CategoriesReducer from "./categoriesReducer";
import ProductReducer from "./productReducer";

export default combineReducers({
  AppReducer,
  CategoriesReducer,
  ProductReducer,
});
