import React from 'react';

import Header from './components/Header/Header';
import router from './router';

import './App.css';
import './reset.css';

export function App( ) {

    return (
        <div id='app-main-container'>
          {router}
        </div>
    );
  }

export default App;
