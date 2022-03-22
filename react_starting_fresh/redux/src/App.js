// import logo from './logo.svg';
import './App.css';
import { Route, Routes , } from 'react-router-dom';
// import UserContainer from './component/fetchData/userContainer';
import UserContainerHooks from './component/fetchData/userContainerHooks';
import { ModalSingleUser } from './component/userSingle/modalSingleUser';
function App() {

  return (
    <div className="App">
    
      <Routes>
          <Route path='/' element ={<UserContainerHooks/>}/>
          <Route 
          path=':id' 
          element ={<ModalSingleUser/>}/>
        </Routes>
     {/* <UserContainerHooks/> */}
    </div>
  );
}

export default App;
