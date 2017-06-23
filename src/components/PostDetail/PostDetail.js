import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostDetail extends Component {
    render() {
        var postId = this.props.match.params.id;

        const {listOfPosts} = this.props;
        return (
            <div>
                <h1>{listOfPosts[postId].title}</h1>
                <p>{listOfPosts[postId].body}</p>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        listOfPosts: state.posts
    };
    
}

export default connect(mapStateToProps)(PostDetail);