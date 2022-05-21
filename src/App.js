import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import { Route , Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/checkout'>
          <Checkout/>
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
