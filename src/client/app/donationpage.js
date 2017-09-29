import React from 'react';
import {Need} from './need.js';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class DonationPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {needs: [{text:"", src:''}, 
                  {text:"", src:''}]};
    this.getNeeds = this.getNeeds.bind(this);
    this.displayNeeds = this.displayNeeds.bind(this);
    this.donateItem = this.donateItem.bind(this);
  }

  displayNeeds(response){
    this.setState({needs: response.data.needs});
  }
  
  getNeeds(){
      axios.get('/get_current_needs.json').then(this.displayNeeds);
  }

  donateItem(itemId){
    const data = {itemId: itemId};
    $.post('/donate_item', data, this.getNeeds);
  }

  componentWillMount() {
      this.getNeeds();
    }

    render(){
      return(<div>
              <Link to={'/login'}>
                  <h3> Login </h3>
              </Link>
              <h1>Things We Need</h1>
              <h2>Simply click donate to donate an item</h2>
              <Need needs={this.state.needs} donateItem={this.donateItem} getNeeds ={this.getNeeds}/>
            </div>)
    }
  }