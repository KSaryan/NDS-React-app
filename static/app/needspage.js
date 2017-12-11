import React from 'react';
import { Display } from './display';
import { Input } from './input.js';
import { Need } from './need.js';
import { Link } from 'react-router-dom';
import { fetchToJSON } from './helpers.js';

// page displaying needs shlter employess have inuted
export class NeedsPage extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {text:'', 
	                src:'',
	                display: 'none',
	                needs: []};
	  this.stylesBtn = { display: 'None'};
	  this.updateDisplay= this.updateDisplay.bind(this);
	  this.getNeeds = this.getNeeds.bind(this);
	  this.displayNeeds = this.displayNeeds.bind(this);
  	}

 	displayNeeds(response){
      this.setState({needs: response.needs});
  	}
  
  	getNeeds(){
  	  fetchToJSON('/get_needs.json', "GET").then(this.displayNeeds);
  	}
  
  	// gets newest needs before mounting
  	componentWillMount() {
      this.getNeeds();
  	}

  	updateDisplay(name, value, display){ 
  	  if (name == "text"){
        this.setState({text: value, display: display});
      }else{
    	this.setState({src: value, display: display});
      }
  	}
	
	render(){
	  let needs = this.state.needs
	  let listNeeds = needs.map((need) =>
		<li key={need.need_id}>
	    <Need need={need} 
	        donateItem={this.donateItem} 
            getNeeds ={this.getNeeds}
            stylesBtn={this.stylesBtn}/>
	     </li>
	  );

	  return(
		<div>
		  <Link to={'/donate'}>
            <h3> Donation Page </h3>
          </Link>
		  <Input updateDisplay={this.updateDisplay}/>
	      <Display updateDisplay={this.updateDisplay} src={this.state.src} text={this.state.text} display={this.state.display} getNeeds={this.getNeeds}/>
	      <h2> Previous Needs </h2>
	      <h4> Grayed Items Have Already Been Dontaed </h4>
 		  <ul>{listNeeds}</ul>        
 		</div>
		)
	}
}