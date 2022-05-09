import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
  const cartItems = useSelector(state => state.cartReducer);
  console.log(cartItems);
  return (
    <div className='container'>
      
        {
          cartItems.map(item=>(
            <div className='row'>
                <div className="col-md-6">
                  <img src={item.image} alt={item.title} height="350px"/>
                </div>
                <div className="col-md-6">
                  <h4>{item.category}</h4>
                  <h2>{item.title}</h2>
                  <h4>{`${item.qty} X ${item.price} =  ${item.qty * item.price}`}</h4>
                </div>
            </div>
          ))
        }

        
    </div>
  )
}

export default Cart