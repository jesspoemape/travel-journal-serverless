import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from './ducks/reducer';

import Header from './components/Header/Header';
import PostCreator from './components/PostCreator/PostCreator';

import './App.css';
import './reset.css';

class App extends Component {
constructor() {
  super();

}



  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
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
