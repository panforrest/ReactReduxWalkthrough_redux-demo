import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/containers/Todos'
import TodoDetails from './components/containers/TodoDetails'
import { Provider } from 'react-redux'
import store from './store'

const app = (
  <Provider store={store.createStore()}>
    <div className="container">
      <div className="col-md-4">
        <Todos />
      </div>

      <div className="col-md-8">
        <TodoDetails />
      </div>
    </div>


  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))