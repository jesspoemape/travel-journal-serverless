import React from 'react';

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
