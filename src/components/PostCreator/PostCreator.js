import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost, getWeather} from './../../ducks/reducer';
import {Link} from 'react-router-dom';
import './PostCreator.css';

class PostCreator extends Component {
    constructor() {
        super();
        this.state = {
            titleInput: '',
            bodyInput: ''
        }

        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

handleTitleChange(e) {
    this.setState({
        titleInput: e
    });
}

handleBodyChange(e) {
    this.setState({
        bodyInput: e
    });
}

handleClick() {
    var post = {title: this.state.titleInput, body: this.state.bodyInput};
    this.setState({
        bodyInput: '',
        titleInput: ''
    });
    this.props.createPost(post);

    // return function componentDidMount() {
    //     this.props.getWeather();
    // }
}

    render() {
        return (
            <div className='input-container'>
                {/*<h2>Create a New Entry</h2>*/}
                <input 
                    type="text" 
                    className='input-title' 
                    placeholder='Title'
                    onChange={ (e) => this.handleTitleChange(e.target.value) }
                    value={this.state.titleInput}/>
                <textarea 
                    rows='12' 
                    className='input-title' 
                    placeholder='Today I...'
                    onChange={ (e) => this.handleBodyChange(e.target.value) }
                    value={this.state.bodyInput}/>
                <Link to='/'><button 
                    className='create-btn' 
                    onClick={() => this.handleClick()}>
                Add
                </button></Link>
            </div>
        );
    }
}


export default connect(null, {createPost, getWeather})(PostCreator);