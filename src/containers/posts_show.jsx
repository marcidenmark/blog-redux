import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { fetchPost } from '../actions';



class PostsShow extends Component {

	componentWillMount() {
		// CHECK IF POST IS NOT ALREADY THERE.
		if (!this.props.post) {
			this.props.fetchPost(this.props.match.params.id);
		}
	}

	render() {
		if (!this.props.post) {
			return
				<p> Loading...  </p>
		}

		return (
			<div>
				<div className="post-item">
					<h3>{this.props.post.title}</h3>
					<p> {this.props.post.content}</p>
				</div>
				<Link to ="/">
					Back
				</Link>
			</div>
			);
	}
}
// below, the second parameter is new.
// id is the parameter from the route.-- the id from the params
// it's a string coming from the url
// you need to parse it and get an integer
// .find-- find the post (p) where the id is the same as the id from the url.
// the 10 is base 10-- used for humans.
// only there to make es lint happy. it should still work without the 10
// "ourProps" is the connected props. it's a second parameter redux gives us.
// the order is important. (state, ownProps)
//


// PSEUDO CODE: state.posts.SEARCH (ID FROM URLS)
// the ownProps is a second parameter-- redux gives this to us.-- the props of the connected component.
// the name after the .match is the name you put in the params in the index.jsx
// this is like the controller in rails being assigned as an instant variable in the view. (minute 110 in lecture)
function mapStateToProps(reduxState, ownProps) {
	const idFromUrl = parseInt(ownProps.match.params.id, 10);
	const post = state.posts.find(p => p.id === idFromUrl);
	return { post };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
