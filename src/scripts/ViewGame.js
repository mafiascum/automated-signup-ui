import React, { Component } from 'react';

class ViewGame extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {

		return (
			<div>Game #{this.props.params.gameId}!</div>
		);
	}
}

export default ViewGame;
