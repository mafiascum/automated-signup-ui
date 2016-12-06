import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/App';
import './index.scss';
import {Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import ViewQueues from './scripts/ViewQueues';
import ViewGame from './scripts/ViewGame';

ReactDOM.render((
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
			<IndexRoute component={ViewQueues}/>
			<Route path="/game/:gameId" component={ViewGame}/>
		</Route>
	</Router>
), document.getElementById('root'));
