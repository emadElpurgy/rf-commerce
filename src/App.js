import React,{useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Login from './components/Login';
import { Route , Switch } from 'react-router-dom'
import { auth } from './firebase';
import useStateValue from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { render } from 'react-dom/cjs/react-dom.production.min';
const promise = loadStripe("pk_test_51JAYk6BHruTtVVwTaeEQ74NUxTqPVDliiitkmuu6je2snMjO8Wwereu4FvhDk2ygpNkpgLwRTsD5dByNKHZbyqqX007e1e97eE");
function App(){
  const state={
    basket:[],
    products:[]
  }  
  const[{user}, dispatch] = useStateValue();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user >>>>>>',authUser);      
      if(authUser){
        //user signed in        
        //dispatch user to data layer (user)
        dispatch({
          type:'SET_USER',
          user:authUser});      
      }else{
        //user signed in        
        //dispatch user to data layer (user)
        dispatch({
          type:'SET_USER',
          user:null});
      }
      
    })}    
  ,[]);


  return (
    <div className="App">
      <Header user={user}/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/checkout'>
          <Checkout/>
        </Route>
        <Route exact path='/payment'>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>          
        </Route>        
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
