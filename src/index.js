import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/containers/Todos'
import { Provider } from 'react-redux'
import store from './store'

const app = (
  <Provider store={store.createStore()}>
    <Todos />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))