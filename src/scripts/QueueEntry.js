import React, { Component } from 'react';

class Queue extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <li>{this.props.name}</li>
    );
  }
}

export default Queue;
