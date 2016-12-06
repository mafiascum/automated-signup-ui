import React, { Component } from 'react';
//import logo from './logo.svg';
import '../styles/App.scss';
import ViewQueues from './ViewQueues';
import ViewGame from './ViewGame';

class App extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {

		return (
			<div id="main">
				{this.props.children}
			</div>
		);
	}
}
//{this.state.activeNode}
export default App;
