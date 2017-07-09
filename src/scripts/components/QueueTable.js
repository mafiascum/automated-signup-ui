import React, { Component } from 'react';
import GameRow from './GameRow'

export default class QueueTable extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
		this.load();
	}

	load() {
		this.loadGames();
	}

  loadGames() {

		setTimeout(() => {
			var games = [];

			for(var i = 0;i < 10;++i) {
				var gameId = i + 1;
				games.push(<GameRow key={i} gameId={gameId} name={"Game #" + gameId} type="Mini Theme" status="Signups" moderators="Username" />);
			}

			this.setState({
				games: games
			})
		}, 1000);
	}
  render() {

    return (
      <div className="tab-pane fade active in">
        <div id="tab1" className="tab-pane fade active in">
          <table className="table table-striped table-bordered table-hover footable toggle-medium">
              <thead>
                <tr>
                   <th>Name</th>
                   <th>Type</th>
                   <th>Status</th>
                   <th>Moderator</th>
                </tr>
               </thead>
                  <tbody>
                    {this.state.games}
                  </tbody>
           </table>
          </div>
        </div>
    )
  }
}
