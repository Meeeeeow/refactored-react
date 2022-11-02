
import './App.css';
import Homepage from './components/homepage';
import { Route , Routes } from 'react-router-dom';
import ShopPage from './components/shoppage';
import Header from './components/header';



function App() {
  return (
    <div className='main'>
      <Header/>
      <Routes>
        <Route path='/' element= {<Homepage/>}/>
        <Route path='shop' element= {<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;  
