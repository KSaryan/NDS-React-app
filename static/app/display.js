import React from 'react';

export class Display extends React.Component {
	constructor(props){
		super(props);
		this.state = {src: '', text: ''}
		this.handleSave = this.handleSave.bind(this);
		this.successFunction = this.successFunction.bind(this);
	}

	successFunction(){
		alert("Saved");
		this.props.updateDisplay('text', '', 'none');
		this.props.updateDisplay('src', '', 'none');
		this.props.getNeeds();
	}

	handleSave(e){
		
		e.preventDefault();
		let data = {src: this.props.src, text: this.props.text};     
		fetchToJSON('/save_need.json', method="POST", data).then(this.successFunction);
	}

  componentWillReceiveProps(nextProps){
  	if (nextProps !== this.props) {
    this.setState({ text: nextProps.text, src: nextProps.src })
  	}
  }
  	render() {
    	return (
      	<div>
      	  <div> {this.state.text} </div>
          <img src= {this.state.src} height="200px" />
          <form onSubmit={this.handleSave}>
	        <input type='submit' value='Save' style ={{display: this.props.display}} />
          </form>
        
      	</div>
    	);
  	}
}