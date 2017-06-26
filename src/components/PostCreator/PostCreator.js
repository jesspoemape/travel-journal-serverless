import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost, getIP, getLocation} from './../../ducks/reducer';
import {Link} from 'react-router-dom';
import Header from './../Header/Header';
import './../../App.css';

class PostCreator extends Component {
    constructor() {
        super();
        this.state = {
            titleInput: '',
            bodyInput: '',
            time: null,
            date: null
        }

        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

componentWillMount() {
    this.props.getLocation();
}

componentDidMount() {
  this.props.getIP();
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
        var d = new Date().toDateString();
        var t = new Date().getHours() + ":" + new Date().getMinutes(); 
        var post = {
            title: this.state.titleInput, 
            body: this.state.bodyInput,
            date: d,
            time: t
        };
        this.setState({
            bodyInput: '',
            titleInput: '',
        });

        this.props.createPost(post);
    }
}

    render() {
        return (
            <div>
                <Header />
            <div className='input-container'>
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
                    <Link to='/landing'>
                        <button // this takes them to the landing page
                        className='create-btn'>
                    Cancel
                        </button>
                    </Link>
                </div>
            </div>
            </div>
            
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         location: state.tempLocation
//     }
// }

export default connect(null, {createPost, getIP, getLocation})(PostCreator);