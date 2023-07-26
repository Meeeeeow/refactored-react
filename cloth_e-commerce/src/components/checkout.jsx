import React from 'react'
import '../styles/checkout.styles.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from './checkoutItem';
import StripeButton from './stripe-button';
import { CheckoutHeaderStyle, CheckoutPageStyle, HeaderBlockStyle,  StripeButtonStyle,  TotalStyle, WarningStyle } from '../styles styledComponent/checkout.styles';
const Checkout = () => {
  const cartItems = useSelector(({cart : {cartItems}})=> cartItems);
  const currentUser = useSelector(({user : {currentUser}}) => currentUser);
  const total = cartItems.reduce((total,item)=> total + (item.quantity * item.price),0);
  console.log(total);
  return (
    <CheckoutPageStyle>
      <CheckoutHeaderStyle>
        <HeaderBlockStyle>
          <span>Product</span>
        </HeaderBlockStyle>
        <HeaderBlockStyle>
          <span>Description</span>
        </HeaderBlockStyle>
        <HeaderBlockStyle>
          <span>Quantity</span>
        </HeaderBlockStyle>
        <HeaderBlockStyle>
          <span>Price</span>
        </HeaderBlockStyle>
        <HeaderBlockStyle>
          <span>Remove</span>
        </HeaderBlockStyle>
      </CheckoutHeaderStyle>
      {
        cartItems.map(cartItem =>  <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
      }
      <TotalStyle>
        TOTAL: ${total}
      </TotalStyle>

      <WarningStyle >
        *Please use the following test credit card number for payments*
        <br/>
        4242 4242 4242 4242 - Exp Date: Any future date(10/28) - CVC: Any 3 digits(123)
      </WarningStyle>
      {
        currentUser ? ( <StripeButtonStyle><StripeButton price={total}/></StripeButtonStyle>) 
        :(<WarningStyle>
          *You need to signin to continue to checkout! Please signin first.*
        </WarningStyle>)
      }
    </CheckoutPageStyle>
  )
}

export default Checkout