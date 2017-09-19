		        // { this.props.list.map((item, i) => {  //NOT { this.state.list.map((item, i) => {
		        //     return <li key={i}>{item.name}</li>
		        //   })
		        // }

import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  	// console.log('addTodo: '+JSON.stringify(this.state.nextTodo))
  	// let list = Object.assign([], this.state.list)  //NOT WORK: let list = Object.assign({}, this.state.list)
  	// list.push(this.state.nextTodo)
  	// this.setState({
  	//   list: list,
  	//   nextTodo:{
   //      name:'',
   //      description: ''
  	//   },

  	// })

  }

  render(){
  //   const list = this.props.todo.todos.map((todo, i) => {
	 //  return (
		// <li key={i}>{todo.name}</li>
	 //  )
  //   })
    const list = this.props.todo.todos

	return(
      <div className="constainer">
        <div className="col-md-4">
            <h3>To Do List</h3>
		    <ol>
		      {
	            list.map((item, i) => {
	              return <li key={i}>{item.name}</li>
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
    todo: state.todo //list: state.todo.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createTodoItem: (todo) => dispatch(constants.createTodoItem(todo))
  }
}

export default connect(stateToProps, dispatchToProps)(Todos)