import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import postsReducers from './reducers/posts_reducer';
import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
	posts: postsReducers,
	form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));



// render an instance of the component in the DOM
ReactDOM.render(
	<Provider store={createStore(reducers, {}, middlewares)}>
		<Router history={history}>
		     	<div className="thin-container">
					<Switch>
						<Route path="/" exact component={PostsIndex} />
						<Route path="/posts/new" exact component={PostsNew} />
						<Route path="/posts/:id" component={PostsShow} />
		    			</Switch>
		      	</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
