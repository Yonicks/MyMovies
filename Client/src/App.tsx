import React from 'react';
import Hello from './containers/Hello';
import Header from './containers/Header';
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <div className="ui main text container">
            <Route exact path='/Counter'><Hello /></Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
