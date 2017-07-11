import React, { Component } from 'react';


/* Used to handle side bar for game information.
Currently not used, but available. */


export default class GameSideBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (

      <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                  <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Reports</a></li>
                  <li><a href="#">Analytics</a></li>
                  <li><a href="#">Export</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                  <li><a href="">Nav item</a></li>
                  <li><a href="">Nav item again</a></li>
                  <li><a href="">One more nav</a></li>
                  <li><a href="">Another nav item</a></li>
                  <li><a href="">More navigation</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                  <li><a href="">Nav item again</a></li>
                  <li><a href="">One more nav</a></li>
                  <li><a href="">Another nav item</a></li>
                </ul>
              </div>
    )
  }
}
