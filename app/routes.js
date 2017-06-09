import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MovieCollection from './containers/MovieCollection';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MovieCollection} />
	</Route>
);
