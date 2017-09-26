import React from 'react';
import ReactDOM from 'react-dom';
import { Display } from './display';
import { Input } from './input.js';
import {Previous} from './previous.js';
import {LogIn} from './login.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {DonationPage} from './donationpage.js';


class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text:'', 
                  src:'', 
                  display: 'None', 
                  needs: [{text:"", src:''}, 
                         {text:"", src:''}]};
    this.addNeed= this.addNeed.bind(this);
    this.getInitialNeeds = this.getInitialNeeds.bind(this);
    this.displayNeeds = this.displayNeeds.bind(this);
  }

  displayNeeds(results){
    this.setState({needs: results.needs});
  }
  
  getInitialNeeds(){
  $.get('/get_needs.json', this.displayNeeds);
}

  componentWillMount() {
      this.getInitialNeeds();
    }

  addNeed(src, text){ 
    this.setState({src: src, text: text, display:'inline-block'});
  }
    render(){
      return(<div>
              <Link to={'/login'}>
                  <h3> Login </h3>
              </Link>
              <Link to={'/donate'}>
                  <h3> Donate </h3>
              </Link>
              <Input addNeed={this.addNeed}/>
              <Display src={this.state.src} text={this.state.text} display={this.state.display} getInitialNeeds={this.getInitialNeeds}/>
              <h2> Previous Needs </h2>
              <Previous needs= {this.state.needs}/>
            </div>)
    }
  }



class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component ={HomePage} />

          <Route path="/login" component={LogIn} />
          <Route path="/donate" component={DonationPage} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);