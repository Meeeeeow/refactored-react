import React from 'react'
import '../styles/checkout.styles.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from './checkoutItem';
import StripeButton from './stripe-button';
const Checkout = () => {
  const cartItems = useSelector(({cart : {cartItems}})=> cartItems);
  const currentUser = useSelector(({user : {currentUser}}) => currentUser);
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
        cartItems.map(cartItem =>  <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
      }
      <div className='total'>
        TOTAL: ${total}
      </div>

      <div className='test-warning' >
        *Please use the following test credit card number for payments*
        <br/>
        4242 4242 4242 4242 - Exp Date: Any future date(10/28) - CVC: Any 3 digits(123)
      </div>
      {
        currentUser ? ( <StripeButton price={total}/>) 
        :(<div className='test-warning'>
          *You need to signin to continue to checkout! Please signin first.*
        </div>)
      }
    </div>
  )
}

export default Checkout