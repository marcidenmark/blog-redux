const ROOT_URL = 'reduxblog.herokuapp.com/api/posts';
const API_KEY = 'marci-redux-blog';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POST = 'FETCH_POST'

export function fetchPosts() {
	const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=marci-redux-blog')
	.then(response => response.json());
	return {
		type: FETCH_POSTS,
		payload: promise
	};
}

export function fetchPost(id) {
	const promise = fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
	.then(response => response.json());

	return {
		type: FETCH_POST,
		payload: promise
	};
}
// line 9- parsing the json
// fetchPosts is of course the name of the function.
// ajax request-- returns a promise.
