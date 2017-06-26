import axios from 'axios';

const initialState = {
    posts: [
        {
            title: "What a Day!", 
            body: 'Omnis natus labore hic cumque animi voluptatibus. Nihil nulla cupiditate aut possimus modi deleniti sunt distinctio. Eaque ad odio distinctio est rerum. Praesentium praesentium a error unde et provident placeat consectetur facilis. Nobis magni nesciunt veritatis aut corrupti asperiores. Id aut at laudantium nobis.',
            moonPhase: 0.75,
            location: '42.36,-71.05',
            date: 'Thurs May 11 2016',
            time: '04:23'
        },
       {
            title: "Best Food", 
            body: 'Omnis natus labore hic cumque animi voluptatibus. Nihil nulla cupiditate aut possimus modi deleniti sunt distinctio. Eaque ad odio distinctio est rerum. Praesentium praesentium a error unde et provident placeat consectetur facilis. Nobis magni nesciunt veritatis aut corrupti asperiores. Id aut at laudantium nobis.',
            moonPhase: 0.35,
            location: '23.23,-93.29',
            date: 'Mon Jun 26 2017',
            time: '15:02'
        }
            ],
    tempMoonPhase: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            var newPost = action.payload;
            newPost.moonPhase = state.tempMoonPhase;
            return Object.assign({}, state, {
                posts: [newPost, ...state.posts]
            });
        case GET_WEATHER + '_FULFILLED':
            return Object.assign({}, state, {
                tempMoonPhase: action.payload
            });
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

export function getWeather(location) {
    const url = `https://api.darksky.net/forecast/5f6d7c13a2c3177b29f5fed29f917fd5/${location}`;
    const promise = axios.get(url).then(response => response.data.daily.data[0].moonPhase); 

    return {
        type: GET_WEATHER,
        payload: promise
    }
}
