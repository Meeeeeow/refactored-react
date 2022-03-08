import './App.css';
import Clock from './Component/clock/clock';
import Form from './Component/form/form.component';
import Calculator from './Component/temperature/calculator';
import ClickCounter from './Component/hoc/clickCounter';
import HoverCounter from './Component/hoc/hoverCounter';
function App() {
  return (
    <div className="App">
      <Clock>I am children</Clock>
      <Form/>
      <Calculator/>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
