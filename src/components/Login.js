import React , {useState} from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { auth, createUser } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const siginIn = e=>{
        e.preventDefault();
        //firebase code
    }
    const register = e=>{
        e.preventDefault();
        //firebase code
        createUser(auth,email,password)
        .then((auth)=>{
            console.log(auth);
        })
        .catch(error=>alert(error.message));
    }
  return (
    <div className='login'>        
        <Link to='/'><img className='login__logo' alt="" src="img/logo-black.png"/></Link>
        <div className='login__container'>
            <h1>Sigin-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password}  onChange={e => setPassword(e.target.value)}/>
                <button  type='submit' className='login__signInButton' onClick={siginIn}>Sigin In</button>
            </form>
            <p>
                By signing-in you agree to The  Amazon's Colone
                Conditions of user & Sales. Please
                see our Privacy Notice, our Cookies Notice
                and out Interest-Based Ads
                Notice. 
            </p>
            <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
