import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Checkout from './Checkout';
import Stores from './Stores';
import Help from './Help';
import firebase from 'firebase';
import './App.css';

function App() {
  const firebaseApp = {
    apiKey: 'AIzaSyDyZj42__jSe0d2m2J0kICc93M4l9tej8c',
    authDomain: 'allbirds-clone-35d9a.firebaseapp.com',
    projectId: 'allbirds-clone-35d9a',
    storageBucket: 'allbirds-clone-35d9a.appspot.com',
    messagingSenderId: '467717910376',
    appId: '1:467717910376:web:1bd2c4a5a3ffdb748170dd',
    measurementId: 'G-E68W3SKW8N',
  };

  firebase.initializeApp(firebaseApp);

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
