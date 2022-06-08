import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { Route , Switch } from 'react-router-dom'

class App extends React.Component{
  state={
    basket:[],
    products:[]
  }

  render(){    
    return (
      <div className="App">
        <Header user="Emad"/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/checkout'>
            <Checkout/>
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
