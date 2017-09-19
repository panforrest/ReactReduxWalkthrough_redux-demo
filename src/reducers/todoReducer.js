import constants from '../constants'

var initialState = {
  todos: [
    {name:'Grocery', description: 'pick up groceries'},
  	{name: 'laudry', description: 'drop off laudry at dry cleaner'}
  ]
}

export default (state=initialState, action) => {
  let updatedState = Object.assign([], state)
  switch(action.type){  //switch(action.type) => {
    case constants.CREATE_TODO_ITEM:
      console.log('CREATE_TODO_ITEM: '+JSON.stringify(action.data))  //+JSON.stringify(action.todos))
      let updatedTodos = (updatedState['todos']==null) ? [] : Object.assign([], updatedState['todos'])
      updatedTodos.unshift(action.data)
      updatedState['todos'] = updatedTodos
      return updatedState

    default:
      return state
  }
}