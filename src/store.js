import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { RootReducer } from './Reducer/RootReducer'

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
