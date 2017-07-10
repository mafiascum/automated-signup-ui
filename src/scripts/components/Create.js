import React, { Component } from 'react';
export default class Create extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="gameType">Game Type</label>
            <select className="form-control" id="gameType">
            <option>Newbie</option>
            <option>Micro</option>
            <option>Mini Normal</option>
            <option>Large Normal</option>
            <option>Open</option>
            <option>Mini Theme</option>
            <option>Large Theme</option>
            </select>
          </div>
          <div className="form-group">
            <label for="numOfPlayers">Number of Players</label>
            <input type="number" className="form-control" id="numOfPlayers" placeholder="" />
          </div>
          <div className="form-group">
            <label for="gameName">Game Name</label>
            <input type="text" className="form-control" id="gameName" placeholder="Name" />
          </div>
          <div className="form-group">
            <label for="gameDescription">Game Description</label>
            <textarea type="textarea" rows="4" className="form-control" id="gameDescription" placeholder="Description"></textarea>
          </div>
          <p>TODO -- Add Backup Mod and CoMods selection when we hook up user selection.</p>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
