import React from 'react';

export class LogIn extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {name:'', password:''}
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
		this.props.login(this.state.name, this.state.password);
	}

	render(){

		return(
			<form >
				<label>
					UserName
					<input type='text' name="name" onChange={this.handleChange}/>
				</label><br />
				<label>
					Password
					<input type='password' name="password" onChange={this.handleChange}/>
				</label><br />
				<input type= 'submit' value='Log In'  onClick={this.handleSave}/>
			</form>


				);
	}

}