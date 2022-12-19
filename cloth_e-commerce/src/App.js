
import './App.css';
import Homepage from './components/homepage';
import { Route , Routes } from 'react-router-dom';
import ShopPage from './components/shoppage';
import Header from './components/header';
import SigninSignup from './components/signin_signup';
import {auth} from './firebase/firebase.utils'
import { useState,useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe =auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  },[]);
   
  return (
    <div className='main'>
      <Header currentUser ={user}/>
      <Routes>
        <Route path='/' element= {<Homepage/>}/>
        <Route path='shop' element= {<ShopPage/>}/>
        <Route path='signin' element={<SigninSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;  
