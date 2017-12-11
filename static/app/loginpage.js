import React from 'react';
import {LogIn} from './login.js';
import {NeedsPage} from './needspage.js';
import {fetchToJSON} from './helpers.js';


// login page for shelter employees
export class LoginPage extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {login: false};
		this.handleSuccess = this.handleSuccess.bind(this);
		this.checkLogIn = this.checkLogIn.bind(this);
	}

	// logs in user by changing state login
	handleSuccess(results){
		if(results.success == 'True'){
			this.setState({login: true});
		}else{
			alert('Incorrect username or password.')
		}
	}

	// does fetch request to server to verify username and password
	checkLogIn(name, password){
		const data = {name: name, password: password};
		fetchToJSON('/login.json', "GET", data).then(this.handleSuccess);
	}

	// renderd login form
	render(){
			if(this.state.login==false){
				return(
					<div>
						<h1> Log In to Add Needs </h1>
						<LogIn login={this.checkLogIn}/>
					</div>
					)
			}else{
				return(
					<NeedsPage />);
			}
	}
}