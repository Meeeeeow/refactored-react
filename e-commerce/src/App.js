
import './App.css';
import Homepage from './components/homepage';
import { Route , Routes } from 'react-router-dom';

const HatsPage = () =>{ 
  return(
      <div>Hats pages</div>
    )
}
  

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element= {<Homepage/>}/>
        <Route path='hats' element= {<HatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;  
