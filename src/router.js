import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import PostCreator from './components/PostCreator/PostCreator';
import PostDetail from './components/PostDetail/PostDetail';

export default (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/create-post' component={PostCreator} />
            <Route path='post-detail/:id' component={PostDetail} />
        </Switch>
)