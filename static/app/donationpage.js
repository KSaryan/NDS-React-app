import React from 'react';
import {Need} from './need.js';
import {Link} from 'react-router-dom';
import {fetchToJSON} from './helpers.js';

// page that displays needs so users can donate
export class DonationPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {needs: [{text:"", src:''}, 
                  {text:"", src:''}]};
    this.stylesBtn = { display: 'inline-block'};
    this.getNeeds = this.getNeeds.bind(this);
    this.displayNeeds = this.displayNeeds.bind(this);
    this.donateItem = this.donateItem.bind(this);
  }

  displayNeeds(response){
    this.setState({needs: response.needs});
  }
  
  getNeeds(){
    fetchToJSON('/get_current_needs.json', "GET").then(this.displayNeeds);
  }

  donateItem(itemId){
    const data = {itemId: itemId};
    fetchToJSON('/donate_item', "POST", data).then(this.getNeeds);

  }

  componentWillMount() {
    this.getNeeds();
  }


  render(){
    const needs = this.state.needs
    let listNeeds = needs.map((need) =>
      <li key={need.need_id}>
      <Need need={need} 
            donateItem={this.donateItem} 
            getNeeds ={this.getNeeds}
            stylesBtn={this.stylesBtn}/>
      </li>
    );

    return(<div>
            <Link to={'/login'}>
                <h3> Login </h3>
            </Link>
            <h1>Things We Need</h1>
            <h2>Simply click donate to donate an item</h2>
            <ul>{listNeeds}</ul>
          </div>)
  }
}