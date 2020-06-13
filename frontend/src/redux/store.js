import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { productReducer } from './productReducer'
import thunk from 'redux-thunk'

const initialState = {}

const reducer = combineReducers({
  productList: productReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store