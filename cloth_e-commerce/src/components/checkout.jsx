import React from 'react'
import '../styles/checkout.styles.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from './checkoutItem';
const Checkout = () => {
  const cartItems = useSelector(({cart : {cartItems}})=> cartItems);

  const total = cartItems.reduce((total,item)=> total + (item.quantity * item.price),0);
  console.log(total);
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>  <CheckoutItem cartItem={cartItem}/>)
      }
      <div className='total'>
        TOTAL: ${total}
      </div>
    </div>
  )
}

export default Checkout