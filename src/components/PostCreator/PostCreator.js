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
    if(this.state.bodyInput !== '' && this.state.titleInput !== ''){
        var post = {title: this.state.titleInput, body: this.state.bodyInput};
        this.setState({
            bodyInput: '',
            titleInput: ''
        });
        this.props.createPost(post);

    function componentDidMount() {
        this.props.getWeather();
    }
    return componentDidMount;
    }
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
                <div className='button-container'>  
                    <Link to={ 
                        (this.state.bodyInput !== '' && this.state.titleInput !== '') 
                        ? 
                            '/post-detail/0'
                        :
                            '/create-post'
                     }>
                        <button // this takes them to the detail page of the newest post, which is added to the front of the posts array
                        className='create-btn' 
                        onClick={(this.state.bodyInput !== '' && this.state.titleInput !== '')
                        ?
                            () => this.handleClick()
                        :
                            null
                    }>
                    Add
                        </button>
                    </Link>
                    <Link to='/'>
                        <button // this takes them to the landing page
                        className='create-btn'>
                    Cancel
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default connect(null, {createPost, getWeather})(PostCreator);