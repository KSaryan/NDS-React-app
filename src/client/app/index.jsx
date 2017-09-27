import React from 'react';
import ReactDOM from 'react-dom';
import {LogIn} from './login.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {DonationPage} from './donationpage.js';
import {HomePage} from './homepage.js';



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