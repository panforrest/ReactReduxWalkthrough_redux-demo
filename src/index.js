import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/containers/Todos'

const app = (
  <div>
    <Todos />
  </div>
)

ReactDOM.render(app, document.getElementById('root'))