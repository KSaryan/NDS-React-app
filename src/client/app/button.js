import React from 'react';

export class Button extends React.Component{

	constructor(props){
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}

	handleSave(e){
		e.preventDefault();
		alert(this.props.need_id);
		this.props.donateItem(this.props.need_id);
		this.props.getNeeds();
	}

	render(){
		return( <button style = {this.props.styles} onClick={this.handleSave}>Donate</button>
			);
	}

}
