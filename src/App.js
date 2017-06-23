import React, { Component } from 'react';

import Header from './components/Header/Header';
import router from './router';

import './App.css';
import './reset.css';

export function App( {children} ) {

    return (
        <div id='app-main-container'>
          <Header />
          {router}
        </div>
    );
  }

export default App;
