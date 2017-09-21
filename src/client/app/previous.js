import React from 'react';


export class Previous extends React.Component{
	render(){
		return(
			<div>
		       {this.props.needs.map((need) => {
		         return (
		         <div>
		         	{need.text}
		           <img src={need.src} style={{height: 100}}></img>
		          </div>
		         );
		      })}
     		</div>
			)
	}
}