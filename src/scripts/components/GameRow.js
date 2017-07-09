import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class GameRow extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {

		return (
				<tr>
					<td><Link to="0">{this.props.name}</Link></td>
					<td>{this.props.type}</td>
					<td>{this.props.status}</td>
					<td>{this.props.moderators}</td>
				</tr>
		);
	}
}

export default GameRow;
