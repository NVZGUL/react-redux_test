import React, {Component} from 'react';
import Element from './item.jsx';

export default class AddItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elements: [],
			index: 0
		};
		this.addItem = this.addItem.bind(this);
	}
	//	Add element in state array
	addItem = () => {
		this.setState({
			elements: this.state.elements.concat(<Element index={this.state.index}/>),
			index: this.state.index + 1
		});
	}

	//	Delete elemnt from state array
	delItem = (i) => {
		this.setState({
			elements: this.state.elements.filter((el, index) =>  index !== i)
		});
	}

	//	If you need refresh index of our state just uncomment next code 
	/*
	delItem = (i) => {
		this.setState({
			elements: this.state.elements.filter((el, index) =>  index !== i),
			index: this.state.index - 1
		});
	}
 	*/
	render() {
		let list = this.state.elements.map(
			(el, index) => 
			<li key={index}>
					{el}
					<button onClick={this.delItem.bind(this, index)}>Delete</button>
			</li>
				); 
		return (
			<div>
				<button onClick={this.addItem}>Add item</button>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}
//	Basic class of our added forms
