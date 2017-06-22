import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header/Header';
import router from './router';

import './App.css';
import './reset.css';

class App extends Component {

  render() {
    return (
      <div>
        <div id='app-main-container'>
          <Header />
          {router}
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

export default connect(mapStateToProps)(App);
