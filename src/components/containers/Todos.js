import React, { Component } from 'react'

class Todos extends Component {
  
  constructor(){
  	super()
  	this.state = {
  	  nextTodo:{
        name:'',
        description: ''
  	  },
  	  list: [
  	    {name:'Grocery', description: 'pick up groceries'},
  	    {name: 'laudry', description: 'drop off laudry at dry cleaner'}

  	  ]
  	}
  }

  updateTodo(field, event){  //NOT updateTodo(event, field){
    console.log('updateTodo: '+field+' == '+event.target.value)  //console.log('updateTodo: '+event.target.id+' == '+event.target.value)
    let nextTodo = Object.assign({}, this.state.nextTodo)   //var
    nextTodo[event.target.id] = event.target.value
    this.setState({
      nextTodo: nextTodo
    })
  }

  addTodo(event){  //addTodo(){
  	console.log('addTodo: '+JSON.stringify(this.state.nextTodo))

  }

  render(){
	return(
      <div className="constainer">
        <div className="col-md-4">
		    <ol>
		        { this.state.list.map((item, i) => {  //NOT { this.state.list.map((item, i) => {
		            return <li key={i}>{item.name}</li>
		          })
		        }
		    </ol>

		    <input onChange={this.updateTodo.bind(this, 'name')} className="form-control" type="text" id="name" placeholder="Name" /><br />
		    <input onChange={this.updateTodo.bind(this, 'description')} className="form-control" type="text" id="description" placeholder="Description" /><br />
		    <button onClick={this.addTodo.bind(this)}>Add Todo</button>
		</div>
	  </div>
	)
  }
}

export default Todos