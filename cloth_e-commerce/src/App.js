
import './App.css';
import Homepage from './components/homepage';
import { Route , Routes } from 'react-router-dom';
import ShopPage from './components/shoppage';
import Header from './components/header';
import SigninSignup from './components/signin_signup';
import {auth, createUserProfile} from './firebase/firebase.utils'
import { useState,useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async(userAuth) => {
      if (userAuth) {
        // console.log(user);
        // setUser(user);
        // console.log(await(createUserProfile(userAuth)));
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot)=>{
          setUser({
            id : snapShot.id,
            ...snapShot.data()
          })
        })
        

      } 
      else {
        setUser(userAuth);
      }
    });

    return () => unsubscribe();
  },[]);
  console.log(user); 
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
