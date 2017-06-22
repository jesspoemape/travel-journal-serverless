const initialState = {
    posts: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            return Object.assign({}, state, {
                posts: [action.payload, ...state.posts]
            });
        default: return state;
    }
}

// action constants
const CREATE_POST = 'CREATE_POST';

//action creators
export function createPost(fullPost) {
    return {
        type: CREATE_POST,
        payload: fullPost
    }
}