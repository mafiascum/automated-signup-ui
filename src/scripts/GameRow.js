import React, { Component } from 'react';
import { Link } from 'react-router';

class GameRow extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {

		return (
				<tr>
					<td><Link to={"/game/" + this.props.gameId}>{this.props.name}</Link></td>
					<td>{this.props.type}</td>
					<td>{this.props.status}</td>
					<td>{this.props.moderators}</td>
				</tr>
		);
	}
}

export default GameRow;
