import React from 'react';

export class Input extends React.Component{
	constructor(props){
		super(props);
		this.state = {text:'', src:''}
		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleChange(e){
		let name = e.target.name;
		let value= e.target.value;
		this.setState({[name]:value});
	}

	handleSave(e){
		e.preventDefault();
		this.props.addNeed(this.state.src, this.state.text);
	}

	render(){
		return(
			<form onSubmit={this.handleSave}>
				<input type='text' name="text"  onChange={this.handleChange}/>
				<input type='src' name="src"  onChange={this.handleChange}/>
				<input type= 'submit' value='Preview' />
			</form>
		)

	}
}