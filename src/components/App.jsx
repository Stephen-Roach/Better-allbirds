import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Checkout from './Checkout';
import Stores from './Stores';
import Help from './Help';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/mens'>
            <Header />
            <Men />
          </Route>
          <Route path='/womens'>
            <Header />
            <Women />
          </Route>
          <Route path='/stores'>
            <Header />
            <Stores />
          </Route>
          <Route path='/cart'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/help'>
            <Header />
            <Help />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
