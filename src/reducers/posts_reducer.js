import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function postsReducer(state = [], action) {
	switch (action.type) {
		case FETCH_POSTS:
			return action.payload ;
		case FETCH_POST:
			return [ action.payload ];
		default:
			return state;
	}
}

// if (postState === undefined) {
// 		return []:
// 	}
