import React, { Component } from 'react';
import './App.css';

import AddItems from './components/add-item.jsx';
import {connect} from 'react-redux';

/*
import { bindActionCreators } from 'redux';
import * as textActions from './redux/actions';
*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      buttonText: 'Open menu',
      input: '',
      arr: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked,
      buttonText: !this.state.isClicked? 'Close menu' : 'Open menu'
    });
  }
 
  render() {
    this.state.arr.map(el => console.log('el ' + el));
    this.state.arr.concat(this.props.text)
    return (
      <div className="App">
        <div className='btn btn__close-open'> 
          <button  onClick={this.handleClick}>{this.state.buttonText}</button>
          <ul>
            {Object.keys(this.props.text).map(el => <li key={el}>{this.props.text[el]}</li>)}
          </ul>
          
        </div>
        <div className="btn tab_openned">
          {this.state.isClicked? <AddItems/> : null}
        </div>
      </div>
    );
  }
}

/*
function mapStateToProps(state, props) {
    return {
        text: state.getText
    };
}
/*
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(textActions, dispatch)
    }
}
*/
export default connect(
  state => ({
    text: state.getText,
  })
)(App);