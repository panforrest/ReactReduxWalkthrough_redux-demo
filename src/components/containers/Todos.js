import React, { Component } from 'react'

class Todos extends Component {
  
  constructor(){
  	super()
  	this.state = {
  	  list: [
  	    {name:'Grocery', description: 'pick up groceries'},
  	    {name: 'laudry', description: 'drop off laudry at dry cleaner'}

  	  ]
  	}
  }

  render(){
	return(
      <div className="constainer">

	    <ol>
	        { this.state.list.map((item, i) => {  //NOT { this.state.list.map((item, i) => {
	            return <li key={i}>{item.name}</li>
	          })
	        }

	    </ol>
	  </div>
	)
  }
}

export default Todos