import React from 'react';
import axios from 'axios';
import { Display } from './display';
import { Input } from './input.js';
import {Need} from './need.js';
import {Link} from 'react-router-dom';


export class NeedsPage extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {text:'', 
	                src:'',
	                display: 'none',
	                needs: 'none'};
	  this.stylesBtn = { display: 'None'};
	  this.updateDisplay= this.updateDisplay.bind(this);
	  this.getNeeds = this.getNeeds.bind(this);
	  this.displayNeeds = this.displayNeeds.bind(this);
  	}

 	displayNeeds(response){
      this.setState({needs: response.data.needs});
  	}
  
  	getNeeds(){
  	  axios.get('/get_needs.json').then(this.displayNeeds);
  	}
  

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
	  let needs = []
	  var opacity;
	  // setting opacity so donated items look grayed out
	  for (let need of this.state.needs){
	  	if(need.donated==true){
	  	  opacity = .2;
	  	}else{
	  	  opacity = 1;
	  	}
	  	// making array of Need components
	  	needs.push(<Need need={need} 
	  					 donateItem={this.donateItem} 
	  					 getNeeds ={this.getNeeds} 
	  					 opacity={opacity} 
	  					 stylesBtn={this.stylesBtn}/>)
		}
	  return(
		<div>
		  <Link to={'/donate'}>
            <h3> Donation Page </h3>
          </Link>
		  <Input updateDisplay={this.updateDisplay}/>
	      <Display updateDisplay={this.updateDisplay} src={this.state.src} text={this.state.text} display={this.state.display} getNeeds={this.getNeeds}/>
	      <h2> Previous Needs </h2>
	      <h4> Grayed Items Have Already Been Dontaed </h4>
 		  <tbody>{needs}</tbody>	        
 		</div>
		)
	}
}