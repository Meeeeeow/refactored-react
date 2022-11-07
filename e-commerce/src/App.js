
import './App.css';
import Homepage from './components/homepage';
import { Route , Routes } from 'react-router-dom';
import ShopPage from './components/shoppage';
import Header from './components/header';
import SigninSignup from './components/signin_signup';



function App() {
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

export default App;  
