import React, { Component } from 'react';
import QueueEntry from './QueueEntry';
import GameRow from './GameRow';

class ViewQueues extends Component {

	constructor() {
		super();
		this.state = {
			queues: [],
			games: []
		};
	}

	componentDidMount() {
		this.load();
	}

	load() {
		this.loadQueues();
		this.loadGames();
	}

	//Load queues & games, delayed, as if it were coming back in an AJAX response.
	loadQueues() {

		setTimeout(() => {
			var queues = [];

			for(var i = 0;i < 3;++i) {
				queues.push(<QueueEntry key={i} name={"Queue " + (i + 1)}/>);
			}

			this.setState({
				queues: queues
			});
		}, 1000);
	}

	loadGames() {

		setTimeout(() => {
			var games = [];

			for(var i = 0;i < 10;++i) {
				games.push(<GameRow loadGame={this.props.loadGame} key={i} url="#" name={"Game #" + (i + 1)} type="Mini Theme" statu="Signups" moderators="Username" />);
			}

			this.setState({
				games: games
			})
		}, 1000);
	}

	render() {

		return (
			<div id="main">
				<div id="queues">
					<ul>
						{this.state.queues}
					</ul>
				</div>

				<div id="games">
					<table>
						<thead>
							<tr>
								<th>Game</th>
								<th>Type</th>
								<th>Status</th>
								<th>Moderators</th>
							</tr>
						</thead>
						<tbody>
							{this.state.games}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ViewQueues;
