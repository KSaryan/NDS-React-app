import React from 'react';

// form where shelter employees can input new needs
export class Input extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleChange(e){
		let name = e.target.name;
		let value= e.target.value;
		this.props.updateDisplay(name, value, 'inline-block');
	}

	// saves need
	handleSave(e){
		e.preventDefault();
		this.props.addNeed(this.state.src, this.state.text, 'inline-block');
	}

	render(){
		return(
			<div className="container form-group">
			<form >
				<div className="form-group">
				  <label>What do you need?</label>
				  <input type='text' id="text" className="form-control" name="text" onChange={this.handleChange}/>
				</div>
				<label>
					Add an image
					<input type='text' name="src"  id="src" onChange={this.handleChange}/>
				</label><br />
			</form>
			</div>
		)

	}
}