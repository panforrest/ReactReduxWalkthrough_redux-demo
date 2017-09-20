		        // { this.props.list.map((item, i) => {  //NOT { this.state.list.map((item, i) => {
		        //     return <li key={i}>{item.name}</li>
		        //   })
		        // }

import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Todos extends Component {
  
  constructor(){
  	super()
  	this.state = {
  	  nextTodo:{
        name:'',
        description: ''
  	  },
  	  // list: [
  	    // {name:'Grocery', description: 'pick up groceries'},
  	    // {name: 'laudry', description: 'drop off laudry at dry cleaner'}

  	  // ]
  	}
  }

  updateTodo(field, event){  //NOT updateTodo(event, field){
    //console.log('updateTodo: '+field+' == '+event.target.value)  //console.log('updateTodo: '+event.target.id+' == '+event.target.value)
    let nextTodo = Object.assign({}, this.state.nextTodo)   //var
    nextTodo[event.target.id] = event.target.value
    this.setState({
      nextTodo: nextTodo
    })
  }

  addTodo(event){  //addTodo(){
    this.props.createTodoItem(this.state.nextTodo)

  }

  selectTodoItem(item, event){
    event.preventDefault()
    console.log('selectTodoItem: ')
    this.props.selectItem(item)
  }

  render(){
  //   const list = this.props.todo.todos.map((todo, i) => {
	 //  return (
		// <li key={i}>{todo.name}</li>
	 //  )
  //   })
    const list = this.props.todo.todos
    // const item = (this.props.item) ? this.props.item.description :'No Todo Item Selected'

  	return(
      <div>
        <div>
              <h3>To Do List</h3>
  		    <ol>
  		      {
  	            list.map((item, i) => {
  	              return <li key={i}><a onClick={this.selectTodoItem.bind(this, item)} href="#">{item.name}</a></li>
  	            })		      	
  		      }

  		    </ol>

  		    <input value={this.state.nextTodo.name} onChange={this.updateTodo.bind(this, 'name')} className="form-control" type="text" id="name" placeholder="Name" /><br />
  		    <input value={this.state.nextTodo.description} onChange={this.updateTodo.bind(this, 'description')} className="form-control" type="text" id="description" placeholder="Description" /><br />
  		    <button onClick={this.addTodo.bind(this)}>Add Todo</button>
  		  </div>


  	  </div>
	)
  }
}

const stateToProps = (state) => {
  return {
    todo: state.todo, //list: state.todo.list
    item: state.todo.selectedItem
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createTodoItem: (todo) => dispatch(actions.createTodoItem(todo)),
    selectItem: (todo) => dispatch(actions.selectItem(todo))
  }
}

export default connect(stateToProps, dispatchToProps)(Todos)