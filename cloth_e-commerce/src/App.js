
import './App.css';
import Homepage from './components/homepage';
import { Route , Routes } from 'react-router-dom';
import ShopPage from './components/shoppage';
import Header from './components/header';
import SigninSignup from './components/signin_signup';
import { connect ,useDispatch } from 'react-redux';
import { create_user } from './store/actions/action';
import {auth, createUserProfile} from './firebase/firebase.utils'
import { useEffect } from 'react';

function App() {
  // const [user, setUser] = useState(null);
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
  // console.log(user); 
  return (
    <div className='main'>
      <Header/>
      <Routes>
        <Route path='/' element= {<Homepage/>}/>
        <Route path='shop' element= {<ShopPage/>}/>
        <Route path='signin' element={<SigninSignup/>}/>
      </Routes>
    </div>
  );
}

// const mapDispatchToProps = dispatch =>{
//   return {
//     create_user : (user) => dispatch(create_user(user))
//   }
// }
// export default connect(null,mapDispatchToProps)(App);  
export default App;
