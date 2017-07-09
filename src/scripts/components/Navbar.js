import React, {Component} from 'react';
import {
  NavLink
} from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">

              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <NavLink to="/" className="navbar-brand">MafiaScum</NavLink>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li>
                          <NavLink to="/queue">Join Game</NavLink>
                      </li>
                      <li>
                          <NavLink to="/create">Create Game</NavLink>
                      </li>
                      <li>
                          <NavLink to="/stats">Stats</NavLink>
                      </li>
                      <li>
                          <NavLink to="/settings">Settings</NavLink>
                      </li>
                  </ul>
              </div>

          </div>
      </nav>
    )
  }
}

export default Navbar
