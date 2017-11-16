import React from 'react';
import {Button} from './button';


export class Need extends React.Component{
	
	render(){
      return(
		<div key={this.props.need.need_id}>
		  <h3 style={{opacity: this.props.opacity}}> We need: {this.props.need.text} </h3><br />
		  <img src={this.props.need.src} style={{height:100, opacity: this.props.opacity}}></img><br />
		  <Button styles= {this.props.stylesBtn} 
		          need_id={this.props.need.need_id} 
		          donateItem={this.props.donateItem} 
		          getNeeds={this.props.getNeeds} />
		</div>
      );
	}
}




