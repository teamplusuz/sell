import {
    PRODUCTS_FETCH_ERROR,
    PRODUCTS_FETCH_FINISHED,
    PRODUCTS_FETCH_STARTED,
} from '../constants/productsConstants'

const initialState = {
    loading: false,
    data: [],
    error: false,
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCTS_FETCH_STARTED:
            return {
                ...state,
                loading: true,
                data: [],
                error: false,
            }

        case PRODUCTS_FETCH_FINISHED:
            return {
                ...state,
                loading: false,
                data: payload,
                error: false,
            }

        case PRODUCTS_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: true,
            }

        default:
            return state
    }
}
