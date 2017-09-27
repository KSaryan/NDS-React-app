import React from 'react';
import { Display } from './display';
import { Input } from './input.js';
import {Need} from './need.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const styles = { display: 'None'}

export class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text:'', 
                  src:'', 
                  display: 'none',
                  needs: [{text:"", src:''}, 
                         {text:"", src:''}]};

    this.addNeed= this.addNeed.bind(this);
    this.getNeeds = this.getNeeds.bind(this);
    this.displayNeeds = this.displayNeeds.bind(this);
  }

  displayNeeds(results){
    this.setState({needs: results.needs});
  }
  
  getNeeds(){
  $.get('/get_needs.json', this.displayNeeds);
  }

  componentWillMount() {
      this.getNeeds();
  }

  addNeed(src, text, display){ 
    this.setState({src: src, "text": text, display: display})
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
            <Display addNeed={this.addNeed} src={this.state.src} text={this.state.text} display={this.state.display} getNeeds={this.getNeeds}/>
            <h2> Previous Needs </h2>
            <Need needs= {this.state.needs} styles={styles}/>
          </div>)
  }
}