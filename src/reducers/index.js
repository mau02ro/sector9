import { combineReducers } from 'redux'

import AppReducer from './appReducer'
import CategoriesReducer from './categoriesReducer'

export default combineReducers({
  AppReducer,
  CategoriesReducer,
})
