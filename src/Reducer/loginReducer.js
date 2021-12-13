const initialState = {
    isLogin: false,
}

export const loginReducer = (state = initialState, {type, payload}) => {
    if (type === 'LOGIN') {
        return {
            ...state,
            ...payload,
        }
    }
    return state
}
