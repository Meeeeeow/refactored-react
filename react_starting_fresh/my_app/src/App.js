import './App.css';
import Clock from './Component/clock/clock';
import Form from './Component/form/form.component';
import Calculator from './Component/temperature/calculator';
function App() {
  return (
    <div className="App">
      <Clock>I am children</Clock>
      <Form/>
      <Calculator/>
    </div>
  );
}

export default App;
