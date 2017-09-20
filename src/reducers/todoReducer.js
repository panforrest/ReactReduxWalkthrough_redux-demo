  // let updatedState = Object.assign([], state)
  // switch(action.type){  //switch(action.type) => {
  //   case constants.CREATE_TODO_ITEM:
  //     console.log('CREATE_TODO_ITEM: '+JSON.stringify(action.data))  //+JSON.stringify(action.todos))
  //     let updatedTodos = (updatedState['todos']==null) ? [] : Object.assign([], updatedState['todos'])
  //     updatedTodos.unshift(action.data)
  //     updatedState['todos'] = updatedTodos
  //     return updatedState

import constants from '../constants'

var initialState = {

  selectedItem: null, //{},
  todos: [
    {name:'Grocery', description: 'pick up groceries'},
  	{name: 'laudry', description: 'drop off laudry at dry cleaner'}
  ]
}

export default (state=initialState, action) => {
  let newState = Object.assign([], state)
  switch(action.type){
    case constants.CREATE_TODO_ITEM:
      console.log('CREATE_TODO_ITEM: '+JSON.stringify(action.data))
      // let updatedTodos = (newState.todos) ? [] : Object.assign([], newsState.todos) 
      let updatedTodos = (newState['todos'] == null) ? [] : Object.assign([], newState.todos) 
      updatedTodos.unshift(action.data)
      newState['todos'] = updatedTodos
      return newState // triggers re-rencder on registered containder components

    case constants.ITEM_SELECTED:
      console.log('ITEM_SELECTED: '+JSON.stringify(action.data))
      // let selected = Object.assign({}, state.selectedItem)
      // selected = action.data
      newState['selectedItem'] = action.data
      return newState

    default:
      return state
  }
}