import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
	onSubmit = (values) => {
		this.props.createPost(values, (post) => { //creatPost-- redux action. see above.
		this.props.history.push('/'); // Navigate after submit
		      return post;
		});
	}
	// line 8 creatPost(values, (post) =>...)
	// 	2 arguments, values, and a function! (post) => ...
	// 	second argument line 27!
	// 	callback line 34 in the index.js

	renderField(field) {
    		return (
	      	<div className="form-group">
	        	<label>{field.label}</label>
	        	<input
	          className="form-control"
	          type={field.type}
	          {...field.input}
		/>
		</div>
		);
	}
	// bootstrap classes, form-group and form-contole Like simple form in RAILS
// renderField comes from package. see below it is in the component=

	render() {

	return (
	      <div>
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
			  <Field
			    label="Title"
			    name="title"//name is a parameter coming from the api.
			    type="text"
			    component={this.renderField}
			  />
			  <label htmlFor="content">Content</label>
			  <Field
			    className="form-control"
			    label="Content"
			    name="content" //name is a parameter coming from the api.
			    component="textarea"
			    rows="8"
			/>
			  <button className="btn btn-primary" type="submit"
			disabled={this.props.pristine || this.props.submitting}>
			    Create Post
			  </button>
			</form>
	      </div>
	);
	}
}



export default reduxForm({ form: 'newPostForm' })(
  connect(null, { createPost })(PostsNew)
);
