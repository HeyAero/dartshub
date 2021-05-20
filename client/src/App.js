import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

import './index.scss';

function App(){

    return(
      <>
        <Switch>
          <Route exact path="/">
            <Pages.Home />
          </Route>
          <Route path="/user">
            <Pages.User />
          </Route>
          <Route path="/game">
            <Pages.Game />
          </Route>
          <Route path="/leaderboard">
            <Pages.Leaderboard />
          </Route>
          <Route path="/lobby">
            <Pages.Lobby />
          </Route>
        </Switch>
      </>
    );
  
  };
  
export default App;