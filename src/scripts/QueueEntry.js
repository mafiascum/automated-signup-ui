import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Queue extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <li><Link to={'$/queue/{this.props.key}'}>{this.props.name}</Link></li>
    );
  }
}

export default Queue;
