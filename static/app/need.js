import React from 'react';
import {Button} from './button';


// a single need
export class Need extends React.Component{
	
	render(){
	  let opacity;
	  let need = this.props.need

	  // set opacity based on whether already donated
	  if(need.donated==true){
	  	 opacity = .2;
	  }else{
		opacity = 1;
	  }

      return(
		<div>
		  <h3 style={{opacity: opacity}}> We need: {this.props.need.text} </h3><br />
		  <img src={this.props.need.src} style={{height:100, opacity: opacity}}></img><br />
		  <Button styles= {this.props.stylesBtn} 
		          need_id={this.props.need.need_id} 
		          donateItem={this.props.donateItem} 
		          getNeeds={this.props.getNeeds} />
		  {this.props.key}
		</div>
      );
	}
}




