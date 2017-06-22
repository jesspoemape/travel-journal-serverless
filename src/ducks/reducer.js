const initialState = {
    posts: [
        {
            title: "What a Day!", 
            body: 'Omnis natus labore hic cumque animi voluptatibus. Nihil nulla cupiditate aut possimus modi deleniti sunt distinctio. Eaque ad odio distinctio est rerum. Praesentium praesentium a error unde et provident placeat consectetur facilis. Nobis magni nesciunt veritatis aut corrupti asperiores. Id aut at laudantium nobis.'
        },
       {
            title: "Best Food", 
            body: 'Omnis natus labore hic cumque animi voluptatibus. Nihil nulla cupiditate aut possimus modi deleniti sunt distinctio. Eaque ad odio distinctio est rerum. Praesentium praesentium a error unde et provident placeat consectetur facilis. Nobis magni nesciunt veritatis aut corrupti asperiores. Id aut at laudantium nobis.'
        }
            ]
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