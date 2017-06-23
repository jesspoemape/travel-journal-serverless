import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './PostDetail.css';
import './../../images/css/weather-icons.min.css';

class PostDetail extends Component {


calculateMoonPhaseIcon() {
    var moon = this.props.moonPhase;

    if (moon === 0) {
        return <i className="wi wi-moon-new"></i>
    }
    else if (moon <= 0.04) {
        return<i className="wi wi-moon-waxing-crescent-1"></i>
    }
    else if (moon <= 0.08) {
        return <i className="wi wi-moon-waxing-crescent-2"></i>
    }
    else if (moon <= 0.12) {
        return <i className="wi wi-moon-waxing-crescent-3"></i>
    }
    else if (moon <= 0.16) {
        return <i className="wi wi-moon-waxing-crescent-5"></i>
    }
    else if (moon <= 0.2) {
        return <i className="wi wi-moon-waxing-crescent-6"></i>
    }
    else if (moon === 0.25) {
        return <i className="wi wi-moon-first-quarter"></i> // first quarter
    }
    else if (moon <= 0.29) {
        return <i className="wi wi-moon-waxing-gibbous-1"></i>
    }
    else if (moon <= 0.33) {
        return <i className="wi wi-moon-waxing-gibbous-2"></i>
    }
    else if (moon <= 0.37) {
        return <i className="wi wi-moon-waxing-gibbous-3"></i>
    }
    else if (moon <= 0.41) {
        return <i className="wi wi-moon-waxing-gibbous-5"></i>
    }
    else if (moon <= 0.45) {
        return <i className="wi wi-moon-waxing-gibbous-6"></i>
    }
    else if (moon === 0.5) {
        return<i className="wi wi-moon-full"></i> // full moon
    }
    else if (moon <= 0.54) {
        return <i className="wi wi-moon-waning-gibbous-1"></i>
    }
    else if (moon <= 0.58) {
        return <i className="wi wi-moon-waning-gibbous-2"></i>
    }
    else if (moon <= 0.62) {
        return <i className="wi wi-moon-waning-gibbous-3"></i>
    }
    else if (moon <= 0.66) {
        return <i className="wi wi-moon-waning-gibbous-5"></i>
    }
    else if (moon <= 0.7) {
        return <i className="wi wi-moon-waning-gibbous-6"></i>
    }
    else if (moon === 0.75) {
        return <i className="wi wi-moon-third-quarter"></i> // third quarter
    }
    else if (moon <= 0.79) {
        return <i className="wi wi-moon-waning-crescent-1"></i>
    }
    else if (moon <= 0.83) {
        return <i className="wi wi-moon-waning-crescent-2"></i>
    }
    else if (moon <= 0.87) {
        return <i className="wi wi-moon-waning-crescent-3"></i>
    }
    else if (moon <= 0.91) {
        return <i className="wi wi-moon-waning-crescent-5"></i>
    }
    else if (moon <= 0.95) {
        return <i className="wi wi-moon-waning-crescent-6"></i>
    }
    else if (moon <= 0.99) {
        return <i className="wi wi-moon-waning-crescent-1"></i>
    }
}

    render() {
        var postId = this.props.match.params.id;

        const {listOfPosts} = this.props;
        return (
            <div>
                <div className='moon-container'>
                    {this.calculateMoonPhaseIcon()}
                </div>
                <div className='post-detail-title'>
                    <h1>{listOfPosts[postId].title}</h1>
                </div>
                <div className='time-date-container'>
                    <span className='detail-svg'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{"enableBackground":"new 0 0 100 100"}} ><g>
                        <path d="M84.3,60V34.4V11.6h-10V2.1H62.2v9.4H29V2.1H16.9v9.4h-10v22.8V89h48.4c3.8,5.3,10,8.8,17,8.8c11.5,0,20.8-9.3,20.8-20.8   C93.1,70,89.6,63.8,84.3,60z M72.3,93.9c-9.3,0-16.8-7.6-16.8-16.8S63,60.2,72.3,60.2c9.3,0,16.8,7.6,16.8,16.8   S81.6,93.9,72.3,93.9z M10.9,34.4h69.5v23.4c-2.5-1-5.2-1.6-8-1.6c-11.5,0-20.8,9.3-20.8,20.8c0,2.8,0.6,5.5,1.6,8H10.9V34.4z    M10.9,15.6h6V25H29v-9.4h33.3V25h12.1v-9.4h6v14.8H10.9V15.6z M25,6.1V21h-4.1V6.1H25z M70.3,6.1V21h-4.1V6.1H70.3z"/>
                        <path d="M61.4,81h11.5c1.1,0,2-0.9,2-2V63.7c0-1.1-0.9-2-2-2s-2,0.9-2,2V77h-9.5c-1.1,0-2,0.9-2,2S60.3,81,61.4,81z"/></g>
                    </svg></span>
                    <h4>Time & Date</h4>
                </div>
                <div className='location-container'>
                    <span className='detail-svg'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{enableBackground:"new 0 0 100 100"}}><g>
                        <path d="M50,26.5c-7.5,0-13.7,6.3-13.7,14s6.1,14,13.7,14s13.7-6.3,13.7-14S57.5,26.5,50,26.5z M50,51.5c-5.9,0-10.7-4.9-10.7-11   s4.8-11,10.7-11s10.7,4.9,10.7,11S55.9,51.5,50,51.5z"/>
                        <path d="M50,11.5c-16,0-29.3,12.8-30.4,29.2c-0.3,4.2,0.3,8.3,1.8,12.4c1.4,3.9,3.8,7.6,6.9,11L48.9,88c0.3,0.3,0.7,0.5,1.1,0.5   s0.9-0.2,1.1-0.5l20.5-23.9c3.2-3.4,5.5-7.1,6.9-11c1.5-4.1,2.1-8.2,1.8-12.4C79.3,24.3,66,11.5,50,11.5z M75.8,52   c-1.3,3.6-3.4,6.9-6.4,10L50,84.7L30.5,62c-2.9-3.1-5-6.4-6.3-10c-1.3-3.7-1.9-7.4-1.6-11.1c0.9-13,11.4-26.4,27.4-26.4   s26.6,13.4,27.4,26.4C77.7,44.6,77.1,48.4,75.8,52z"/></g>
                    </svg></span>
                    <h4>Location</h4>
                </div>
                <div className='post-detail-body'>
                    <p>{listOfPosts[postId].body}</p>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        listOfPosts: state.posts,
        moonPhase: state.moonPhase
    };
    
}

export default connect(mapStateToProps)(PostDetail);