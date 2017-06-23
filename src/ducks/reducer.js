import axios from 'axios';

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
            ],
    moonPhase: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            return Object.assign({}, state, {
                posts: [action.payload, ...state.posts]
            });
        case GET_WEATHER + '_FULFILLED': 
        console.log(action.payload);
            // return Object.assign({}, state, {
            //     moonPhase: action.payload
            // });
            break;
        case GET_WEATHER + '_PENDING':
            break;
        case GET_WEATHER + '_REJECTED': 
            alert('There was an error. Try again.');
            break;
        default: return state;
    }
}

// action creator constants
const CREATE_POST = 'CREATE_POST';
const GET_WEATHER = 'GET_WEATHER';


//action creators
export function createPost(fullPost) {
    return {
        type: CREATE_POST,
        payload: fullPost
    }
}

export function getWeather() {
    const url = 'https://api.darksky.net/forecast/5f6d7c13a2c3177b29f5fed29f917fd5/37.8267,-122.4233';
    const promise = axios.get(url).then(response => response.data.daily.data[0].moonPhase); 

    return {
        type: GET_WEATHER,
        payload: promise
    }
}