import React from 'react';
import {Button} from './button';


export class Need extends React.Component{
	render(){
		if (this.props.needs == 'none'){
				return (<h3>No Current Needs</h3>)
			}else{
				return(
					<div>
				       {this.props.needs.map((need) =>{ 

				       	if (need.donated==false){
				         return (
				         <div key={need.need_id}>
				            <h3> We need: {need.text} </h3><br />
				           <img src={need.src} style={{height: 100}}></img><br />
				           <Button styles= {this.props.styles} need_id={need.need_id} donateItem={this.props.donateItem} getNeeds =
				           {this.props.getNeeds} />
				          </div>
				         );
				      }

				      else{

						return (
				         <div key={need.need_id}>
				         	<h3> We need: {need.text} </h3><br />
				           <img src={need.src} style={{height: 100, opacity: "0.5"}}></img><br />
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
}




