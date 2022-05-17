import './App.css';
import {useSelector , useDispatch } from 'react-redux';
import * as ACTIONS from './store/actions/action';
function App() {
  const state = useSelector((state)=> state);
  console.log(state.cake.numCakes);
  const dispatch = useDispatch();
  const cakePrice = 5;
  const icePrice = 7;
  return (
      <div className="App">
        <h1 className='text-4xl font-bolder font-mono p-2 border-b-2 border-red-600'> Welcome to Kary Kary Bakery!</h1>

        <div className='flex flex-row justify-around items-center mt-6'>
           {state.cake.numCakes ? (
                <div className='cakes'>
                    <h1 className='text-2xl font-bold font-mono mb-3'>Come for the best cakes in town</h1>
                    <h2 className='text-xl font-bold mb-3'>Cake Price(Per piece): ${cakePrice}</h2>
                    <button className='border border-green-700 rounded p-2 hover:bg-green-800 hover:text-white mx-4' onClick ={()=>{
                       dispatch(ACTIONS.add_cake());
                    }}>Add Cake</button>
                    <span className='border py-2 px-3 border-zinc-900'>{state.cake.numCakes}</span>
                    <button className='border border-red-700 rounded p-2 hover:bg-red-800 hover:text-white mx-4' onClick={()=> dispatch(ACTIONS.buy_cake())}>Buy Cake</button>
                    <h1 className='text-xl font-bold mt-3'>Sub-Total: ${state.cake.qty * cakePrice}</h1>
                </div>
           ) : (
             <div className='flex flex-col'>
                <h1 className='text-2xl font-bold font-mono'>Sorry! Out of Cakes</h1>
                <h1 className='text-4xl font-bold font-mono'>Your Sub-Total is ${state.cake.qty * cakePrice}</h1>
             </div>
           )}
            {state.ice.numIces ? (
              <div className='ices'>
                  <h1 className='text-2xl font-bold font-mono mb-3'>Come for the best and flavorful icecreams in town</h1>
                  <button className='border border-green-700 rounded p-2 hover:bg-green-800 hover:text-white mx-3' onClick ={()=> dispatch(ACTIONS.add_ice())}>Add Ice-cream</button>
                  <span className='border py-2 px-3 border-zinc-900'>{state.ice.numIces}</span>
                  <button className='border border-red-700 rounded p-2 hover:bg-red-800 hover:text-white mx-3' onClick={()=> dispatch(ACTIONS.buy_ice())}>Buy Ice-cream</button>
                  <h1 className='text-xl font-bold mt-3'>Sub-Total: ${state.ice.qty * icePrice}</h1>
              </div>
            ) : (
              <div className='flex flex-col'>
                <h1 className='text-2xl font-bold font-mono'>Sorry!Out of ice-creams!</h1>
                <h1 className='text-4xl font-bold font-mono'>Your Sub-Total is ${state.ice.qty * icePrice}</h1>
              </div>
            )}
        </div>
    </div>
   
  );
}

export default App;
