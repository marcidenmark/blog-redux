import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
			<Link to={`/posts/${post.id}`} key={post.id}>
				<div className="post-item">
					<h3>{post.title}</h3>
					<p>{post.content}</p>
				</div>
			</Link> );
		}
		);
	}
	render() {
		return (
			<div>
				<div className="first-row">
					<h3>Blog Posts</h3>
					<Link className="btn btn-primary btn-cta" to="/posts/new">
						Lets write a post
					</Link>
				</div>
				{this.renderPosts()}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

// this function gives the redux state to the component.
function mapStateToProps(state, ownProps) {
	return {
		posts:state.posts
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
