import { combineReducers } from 'redux'
import { productsReducer } from './productsReducer'

export const RootReducer = combineReducers({
    products: productsReducer,
})
