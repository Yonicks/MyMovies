import React from 'react';
import Hello from './containers/Hello';
import Header from './containers/Header';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from './history';
import Collections from './containers/Collections.container';

function App() {
  return (
    <div className="ui container">
      <Router history={createBrowserHistory}>
        <div>
          <Header />
          <div className="ui main container">
            <Switch>
              <Route exact path='/'>
                <Collections />
              </Route>
              <Route exact path='/Counter'>
                <Hello />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
