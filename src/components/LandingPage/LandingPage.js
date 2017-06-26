import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './../Header/Header';

import './../../App.css';

class LandingPage extends Component {


    render() {
        return (
            <div className='main-container'>
                <Header />
                {
                    this.props.listOfPosts.map( (post, i) => {
                        return <Link className='link' to={`/post-detail/${i}`} key={i}>
                        <div className='landing-post-container' >
                            <div className='landing-post-title'>
                                <h2>
                                    {post.title} <span className='landing-title-date'>{post.date}</span>
                                    <span className='landing-svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5 20c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l8.646-8.646-8.646-8.646c-.195-.195-.195-.512 0-.707s.512-.195.707 0l9 9c.195.195.195.512 0 .707l-9 9c-.098.098-.226.146-.354.146z"/>
                                    </svg></span>
                                </h2>
                            </div>
                            <div className='landing-post-body'>
                                <p>{ `${post.body.slice(0, 175)}...` }</p>
                            </div>
                            <hr className='hr'/>
                        </div>
                        </Link>
                    } )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listOfPosts: state.posts
    }
}

export default connect(mapStateToProps)(LandingPage);