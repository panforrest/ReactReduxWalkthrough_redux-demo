import { createStore, applyMiddleware, combineReducers } from 'redux'  //NOT from 'react-redux'
import thunk from 'redux-thunk'
import { todoReducer } from '../reducers' 

var store = null

export default {
  createStore: () => {
  	const reducers = combineReducers({
  	  todo: todoReducer
  	})

  	store = createStore(
  	  reducers,
      applyMiddleware(thunk)
  	)

    return store

  },

  currentStore: () => {
  	return store
  }
}