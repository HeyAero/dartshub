import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header, Footer } from './layout'

import './index.scss';

function App(){

    return(
      <>
        {/* <Header /> */}
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
        </Switch>
        <Footer />
      </>
    );
  
  };
  
export default App;