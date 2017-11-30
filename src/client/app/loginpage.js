import React from 'react';
import {LogIn} from './login.js';
import {NeedsPage} from './needspage.js';


export class LoginPage extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {login: false};
		this.handleSuccess = this.handleSuccess.bind(this);
		this.checkLogIn = this.checkLogIn.bind(this);
	}

	handleSuccess(results){
		if(results.success == 'True'){
			this.setState({login: true});
		}else{
			alert('Incorrect username or password.')
		}
	}

	checkLogIn(name, password){
		const data = {name: name, password: password};
		fetchToJSON('/login.json', method="GET", data).then(this.handleSuccess);
	}

	// shouldComponentUpdate(nextProps, nextState) {
 //    if (this.state == nextState) {
 //      return false;
 //    } else {
 //      alert("Okay fine I will update.")
 //      return true;
 //      this.render();
 //    }
 //  }


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