import React, {Component} from 'react';
import {
  NavLink
} from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Mafiascum</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/queue">Join</NavLink></li>
              <li><NavLink to="/create">Create</NavLink></li>
              <li><NavLink to="/stats">Stats</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
