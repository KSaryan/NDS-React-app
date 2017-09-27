import React from 'react';
import {Button} from './button';


export class Need extends React.Component{
	render(){
		return(
			<div>
		       {this.props.needs.map((need) =>{ 

		       	if (need.donated==false){
		         return (
		         <div>
		         	{need.text}
		           <img src={need.src} style={{height: 100}}></img>
		           <Button styles= {this.props.styles} need_id={need.need_id} donateItem={this.props.donateItem} getNeeds =
		           {this.props.getNeeds} />
		          </div>
		         );
		      }

		      else{

				return (
		         <div>
		         	{need.text}
		           <img src={need.src} style={{height: 100, opacity: "0.5"}}></img>
		           <Button styles= {this.props.styles} need_id={need.need_id} donateItem={this.props.donateItem} getNeeds =
		           {this.props.getNeeds} />
		          </div>
		         );
		      }

		    }   	
			)
	
				}
			</div>
			)

	}
}




