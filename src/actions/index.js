const ROOT_URL = 'reduxblog.herokuapp.com/api/posts';
const API_KEY = 'marci-redux-blog';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

export function fetchPost(id) {
	const promise = fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
	.then(response => response.json());

	return {
		type: FETCH_POST,
		payload: promise
	};
}

export function fetchPosts() {
	const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=marci-redux-blog')
	.then(response => response.json());
	return {
		type: FETCH_POSTS,
		payload: promise
	};
}

export function createPost(body, callback) {
	const request = fetch(`${ROOT_URL}?key=${API_KEY}`, {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify(body)
	})
	.then(response => response.json())
	.then(callback); // second argument from creatPost. used in posts_new.jsx
	return {
		type: POST_CREATED,
		payload: request
	};
}
// line 9- parsing the json
// fetchPosts is of course the name of the function.
// ajax request-- returns a promise.

