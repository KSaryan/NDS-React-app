import React from 'react';
import {fetchToJSON} from './helpers.js';

export class Display extends React.Component {
	constructor(props){
		super(props);
		this.state = {src: '', text: ''}
		this.handleSave = this.handleSave.bind(this);
		this.successFunction = this.successFunction.bind(this);
	}

	// flashes saved message, empties diplay, calls get needs from needspage.js
	successFunction(results){
		alert("Saved");
		this.props.updateDisplay('text', '', 'none');
		this.props.updateDisplay('src', '', 'none');
		this.props.getNeeds();
	}

	// saves new needs in database
	handleSave(e){
		
		e.preventDefault();
		let data = {src: this.props.src, text: this.props.text};    
		fetchToJSON('/save_need.json', "POST", data).then(this.successFunction);
	}

	// updates state when props have changed
	componentWillReceiveProps(nextProps){
	  	if (nextProps !== this.props) {
	    this.setState({ text: nextProps.text, src: nextProps.src })
	  	}
	  }


  	render() {
    	return (
      	<div>
      	  <div> {this.state.text} </div>
          <img src= {this.state.src} height="200px" />
          <form onSubmit={this.handleSave}>
	        <input type='submit' value='Save' style ={{display: this.props.display}} />
          </form>
        
      	</div>
    	);
  	}
}