import './App.css';
import React,{Component} from 'react';
import Products from './component/product/product';

class App extends Component{
  state={
    users:[
      {id:1,name:"rahim"},
      {id:2,name:"karim"},
      {id:3,name:"Sohel"}
    ]
  }

  render(){
    return(
      <div>
        <Products data ={this.state.users}/>
      </div>
    )
  }
}

export default App;

