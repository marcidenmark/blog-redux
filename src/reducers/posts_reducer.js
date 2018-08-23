import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function postsReducer(state = [], action) {
	// debugger
	switch (action.type) {
		case FETCH_POSTS: {
			return action.payload;
		}
		case FETCH_POST: {
			return [ action.payload ];
		}
		default:
			return state;
	}
}
	// case POST_CREATED:

// if (postState === undefined) {
// 		return []:
// 	}
// import { FETCH_POSTS, FETCH_POST } from '../actions';

// export default function postsReducer(state = [], action) {
// 	switch (action.type) {
// 		case FETCH_POSTS:
// 			return action.payload ;
// 	}
// 	switch ( action.type) {
// 		case FETCH_POST:
// 			return [ action.payload ];
// 		default:
// 			return state;
// 	}
// }

// // if (postState === undefined) {
// // 		return []:
// // 	}
