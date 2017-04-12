import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleText, handleClick} from '../redux/actions'


class Element extends Component {

	constructor(props){
		super(props)
		this.state = {
			buttonText: 'Remove',
			isClicked: false,
			buffer: {}
		}
	}

	onChangeTextToApp = (e) => {
		this.props.onChangeText({[e.target.name]: e.target.value });
		this.setState({
			buffer:{[e.target.name]: e.target.value}
		})
	}


	removeItem = (e) => {
		this.setState({
			isClicked: !this.state.isClicked,
			buttonText: !this.state.isClicked? 'Restore' : 'Remove'
		})
		this.props.onClickRemove({[e.target.id]: this.state.isClicked})
		!this.state.isClicked? this.props.onChangeText({}) : this.props.onChangeText(this.state.buffer);
	}

	render() {
		return (
			<div key={this.props.index}>
				{this.state.isClicked? null : 
					<div>
						<p>{'Item ' + this.props.index }</p>
						<textarea onChange={this.onChangeTextToApp.bind(this)} type='textbox' name={this.props.index}>
							{this.state.buffer[this.props.index]}
						</textarea>
					</div>}	
				<button id={this.props.index} onClick={this.removeItem.bind(this)}>{this.state.buttonText}</button>
			</div>
		);
	}
}

export default connect(
	state => ({
		text: state.getText,
		isRemove: state.isRemoveText
	}),
	dispatch => ({
		onChangeText: (inputText) => {
			dispatch(handleText(inputText));			
		},
		onClickRemove: (removeAction) => {
			dispatch(handleClick(removeAction))
		}
	})
)(Element)