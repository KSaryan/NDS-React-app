import React from 'react';

export class Display extends React.Component {
	constructor(props){
		super(props);
		this.state = {src:'', text:''}
		this.handleSave = this.handleSave.bind(this);
		this.successFunction = this.successFunction.bind(this);
	}

	successFunction(){
		alert("Saved");
		$('#display').empty();
		this.props.getInitialNeeds();
	}

	handleSave(e){
		e.preventDefault();
		const data = {src: this.props.src, text: this.props.text}
		$.get('/save_need.json', data, this.successFunction)
	}

  	render() {
    	return (
      	<div id='display'>
      		<div> {this.props.text} </div>
        	<img src= {this.props.src} height="200px" />
        	<form onSubmit={this.handleSave}>
	        	<input type='submit' value='Save' style ={{display: this.props.display}} />
        	</form>
        
      	</div>
    	);
  	}
}