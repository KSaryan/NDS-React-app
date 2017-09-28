import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {DonationPage} from './donationpage.js';
import {HomePage} from './homepage.js';
import {LoginPage} from './loginpage.js'


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component ={HomePage} />
          <Route path="/login" component={LoginPage} />
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