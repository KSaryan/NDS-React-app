import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


{/* homepage with links to other pages */}
export class HomePage extends React.Component{

  render(){
    return(<div>
            <Link to={'/login'}>
                <h3> Login </h3>
            </Link>
            <Link to={'/donate'}>
                <h3> Donation Page </h3>
            </Link>
          </div>)
  }
}