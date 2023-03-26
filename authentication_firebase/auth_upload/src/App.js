import './App.css';
import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { create_user } from './store/actions/action';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import SigninSignup from './components/signin_signup';
import UserDashboard from './components/userDashboard';
import AdminDashboard from './components/adminDashboard';
import { auth, createUserProfile } from './firebase/firebase.utils';
function App() {
  const currentUser =  useSelector(({user}) => user.currentUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async(userAuth) => {
      if (userAuth) {
        // console.log(user);
        // setUser(user);
        // console.log(await(createUserProfile(userAuth)));
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot)=>{
          dispatch(create_user({
            id : snapShot.id,
            ...snapShot.data()
          }))
        })
        

      } 
      else {
        dispatch(create_user(userAuth));
      }
    });

    return () => unsubscribe();
  },[]);

  //check admin
  const isAdmin = currentUser && currentUser.email.toLowerCase() === 'admin@gmail.com';
  console.log(isAdmin);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ (currentUser ? (isAdmin ? <Navigate to="admin"/> : <Navigate to="user"/>) : <SigninSignup/>)}/>
        
        <Route path="viewall" element={currentUser ?  <Homepage/> : <SigninSignup/>}/>

        <Route path="user" element={currentUser && !isAdmin ? <UserDashboard/> : <Navigate to="/"/>}/>

        <Route path="admin" element={currentUser && isAdmin ? <AdminDashboard/> : <Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
