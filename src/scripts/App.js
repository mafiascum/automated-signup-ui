import React, { Component } from 'react';
//import logo from './logo.svg';
import '../styles/App.scss';
import ViewQueues from './ViewQueues';
import ViewGame from './ViewGame';

class App extends Component {

	constructor() {
		super();
		this.state = {
			activeNode: <ViewQueues key="viewQueues" loadGame={this.loadGame}/>
		};
	}

	componentDidMount() {
	}

	loadGame = () => {
		this.setState({
			activeNode: <ViewGame key="viewGames"/>
		});
	}

	render() {

		return (
			<div id="main">
				{this.state.activeNode}
			</div>
		);
	}
}

export default App;
