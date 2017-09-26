import React from 'react';
import {Button} from './button';


export class Donate extends React.Component{
	render(){
		return(
			<div>
		       {this.props.needs.map((need) => {
		         return (
		         <div>
		         	{need.text}
		           <img src={need.src} style={{height: 100}}></img>
		           <Button need_id={need.need_id} donateItem={this.props.donateItem} getNeeds =
		           {this.props.getNeeds} />
		          </div>
		         );
		      })}
     		</div>
			)
	}
}