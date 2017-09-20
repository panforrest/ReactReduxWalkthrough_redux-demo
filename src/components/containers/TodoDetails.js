		        // { this.props.list.map((item, i) => {  //NOT { this.state.list.map((item, i) => {
		        //     return <li key={i}>{item.name}</li>
		        //   })
		        // }

import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class TodoDetails extends Component {
  
  constructor(){
  	super()
  	this.state = {
  	  // nextTodo:{
     //    name:'',
     //    description: ''
  	  // },
  	  // list: [
  	    // {name:'Grocery', description: 'pick up groceries'},
  	    // {name: 'laudry', description: 'drop off laudry at dry cleaner'}

  	  // ]
  	}
  }

  // updateTodo(field, event){  //NOT updateTodo(event, field){
  //   //console.log('updateTodo: '+field+' == '+event.target.value)  //console.log('updateTodo: '+event.target.id+' == '+event.target.value)
  //   let nextTodo = Object.assign({}, this.state.nextTodo)   //var
  //   nextTodo[event.target.id] = event.target.value
  //   this.setState({
  //     nextTodo: nextTodo
  //   })
  // }

  // addTodo(event){  //addTodo(){
  //   this.props.createTodoItem(this.state.nextTodo)

  // }

  // selectTodoItem(item, event){
  //   event.preventDefault()
  //   console.log('selectTodoItem: ')
  //   this.props.selectItem(item)
  // }

  render(){
    const selected = this.props.todo.selectedItem // starts as null
	 //  return (
		// <li key={i}>{todo.name}</li>
	 //  )
  //   })
    // const list = this.props.todo.todos
    // const item = (this.props.item) ? this.props.item.description :'No Todo Item Selected'

  	return(
      <div>
        <h3>To Do Details</h3>

        { (selected == null) ? <div> No item selected </div> :
          <div>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
          </div>

        }

  	  </div>
	  )
  }
}

const stateToProps = (state) => {
  return {
    todo: state.todo, //list: state.todo.list
    // item: state.todo.selectedItem
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(TodoDetails)