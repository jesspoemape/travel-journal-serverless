const initialState = {
    posts: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
        console.log('here');
            break;
        default: return state;
    }
}

// action constants
const CREATE_POST = 'CREATE_POST';

//action creators
export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}