// import logo from './logo.svg';
import './App.css';
import { Route, Routes , } from 'react-router-dom';
// import UserContainer from './component/fetchData/userContainer';
import UserContainerHooks from './component/fetchData/userContainerHooks';
import { ModalSingleUser } from './component/userSingle/modalSingleUser';
import { UpdateUser } from './component/update/updateUser';
import { Homepage } from './component/homepage/homepage';
import Signup from './component/signup/signup';
import Signin from './component/signin/signin';
import Header from './component/header/header';
import Footer from './component/footer/footer';
function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element ={<Homepage/>}/>
         <Route path="users" element={<UserContainerHooks/>}/>

          <Route path='users/:id' element ={<ModalSingleUser/>}/>
          <Route path="users/update/:id" element={<UpdateUser/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
     {/* <UserContainerHooks/> */}
     <Footer/>
    </div>
  );
}

export default App;
