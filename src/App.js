import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from './ducks/reducer';
import router from './router';

import Header from './components/Header/Header';
import PostCreator from './components/PostCreator/PostCreator';

import './App.css';
import './reset.css';

class App extends Component {

  render() {
    return (
      <div>
        <div id='app-router-container'>{router}</div>
        <div id='app-main-container'>
          <Header />
        </div>
        <div id='app-post-creator-container'>
          <PostCreator createPost={this.props.createPost}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, {createPost})(App);
