import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from './../../ducks/reducer';
import './PostCreator.css';

class PostCreator extends Component {
    constructor() {
        super();
        this.state = {
            titleInput: '',
            bodyInput: ''
        }
    }

handleTitleChange(e) {
    console.log(e, 'title');
    this.setState({
        titleInput: e
    });
}

handleBodyChange(e) {
    console.log(e, "body");
    this.setState({
        bodyInput: e
    });
}

    render() {
        return (
            <div className='input-container'>
                {/*<h2>Create a New Entry</h2>*/}
                <input 
                    type="text" 
                    className='input-title' 
                    placeholder='Title'
                    onChange={ (e) => this.handleTitleChange(e.target.value) }/>
                <textarea 
                    rows='12' 
                    className='input-title' 
                    placeholder='Today I...'
                    onChange={ (e) => this.handleBodyChange(e.target.value) }/>
                <button className='create-btn' onClick={() => this.props.createPost()}>Add</button>
            </div>
        );
    }
}


export default connect(null, {createPost})(PostCreator);