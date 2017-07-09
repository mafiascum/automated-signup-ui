import React, {Component} from 'react'
import Queue from './Queue'
import QueueTable from './QueueTable'
import {
  Route, NavLink
} from 'react-router-dom'

class View extends Component{

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
		this.load();
	}

	load() {
		this.loadQueues();
	}

  //Load queues & games, delayed, as if it were coming back in an AJAX response.
	loadQueues() {

		setTimeout(() => {
			var queues = [];

      //Spoof test data, 3 queues.
			for(var i = 0;i < 3;++i) {
				queues.push(<Queue key={i} id={i} name={"Queue " + (i + 1)}/>);
			}

      //Set the queue array.
			this.setState({
				queues: queues
			});
		}, 1000);
	}



  render() {
    return (
      <div className="container">

      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <ul className="nav nav-tabs responsive">
            <li>
                <NavLink to="/queue/0">Queue1</NavLink>
            </li>
            <li>
                <NavLink to="/queue/1">Queue2</NavLink>
            </li>
            <li>
                <NavLink to="/queue/2">Queue3</NavLink>
            </li>
            </ul>
            <div className="tab-content">
              <Route path="/queue/:queueId" component={QueueTable} />
            </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

export default View
