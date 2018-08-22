import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import postsReducers from './reducers/posts_reducer';
import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
	posts: postsReducers
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
	<Provider store={createStore(reducers, {}, middlewares)}>
		<Router history={history}>
		     	<div className="thin-container">
					<Switch>
						<Route path="/" exact component={PostsIndex} />
						<Route path="/posts/:id" component={PostsShow} />
		    			</Switch>
		      	</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
