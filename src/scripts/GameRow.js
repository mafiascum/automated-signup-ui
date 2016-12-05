import React, { Component } from 'react';

class GameRow extends Component {

	constructor() {
		super();
		this.state = {};
	}

	gameClick = (e) => {
		e.preventDefault();
		this.props.loadGame();
	}

	render() {

		return (
				<tr>
					<td><a onClick={this.gameClick} href="{this.props.url}">{this.props.name}</a></td>
					<td>{this.props.type}</td>
					<td>{this.props.status}</td>
					<td>{this.props.moderators}</td>
				</tr>
		);
	}
}

export default GameRow;
