import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class Queue extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <li><Link to={`/queue/${this.props.id}`}>{this.props.id} + {this.props.name}</Link></li>
    );
  }
}
