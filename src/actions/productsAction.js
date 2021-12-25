import {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCH_FINISHED,
    PRODUCTS_FETCH_STARTED,
} from '../constants/productsConstants'
import { productsData } from './../data/productsData'

export const getProducts = () => async dispatch => {
    dispatch({ type: PRODUCTS_FETCH_STARTED })

    try {
        dispatch({ type: PRODUCTS_FETCH_FINISHED, payload: productsData })
    } catch (err) {
        console.log(err)
        dispatch({ type: PRODUCTS_FETCH_ERROR })
    }
}
