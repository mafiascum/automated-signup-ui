import React, { Component } from 'react'
import Navbar from './components/Navbar'
import View from './components/View'
import Create from './components/Create'
import {
  Route, Switch
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
          <Switch>
            <Route exact path="/" component={View}/>
            <Route path="/queue" component={View}/>
            <Route path="/create" component={Create} />
          </Switch>
					</div>
		)
	}
}
//{this.state.activeNode}
export default App;
