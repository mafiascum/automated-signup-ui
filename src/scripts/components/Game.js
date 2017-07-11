import React, { Component } from 'react';


export default class Game extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="page-header">Game Name</h1>
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <div>
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget massa malesuada aliquet. Duis eu nulla quam. Etiam sodales aliquet ex, eu euismod tellus elementum quis. Aliquam molestie nisi quis tellus posuere lobortis.</blockquote>
              <h4>Player List</h4>
              <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Player1</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Player2</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Player3</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Player4</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Player5</td>
                  <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 main">

            <div className="panel panel-default">
              <div className="panel-body">
              <p className="h3 text-center">0/13</p>
                <button type="button" className="btn btn-primary btn-block">Join</button>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-body">
              <table className="table">
                <tr>
                  <td><strong>Type</strong></td>
                  <td>Mini Theme</td>
                </tr>
                <tr>
                  <td><strong>Moderator</strong></td>
                    <td>Ice Bear</td>
                </tr>
                <tr>
                  <td><strong>Number of Players</strong></td>
                    <td>13</td>
                </tr>
              </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
