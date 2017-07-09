import React, { Component } from 'react'
import Navbar from './components/Navbar'
import View from './components/View'
import {
  Route
} from 'react-router-dom'

class App extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
				<div>
					<Navbar />

          <Route path="/" component={View} />
					</div>
		)
	}
}
//{this.state.activeNode}
export default App;
