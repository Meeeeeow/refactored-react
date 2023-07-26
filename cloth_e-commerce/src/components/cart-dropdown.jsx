import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggle_hidden } from '../store/actions/action';
import '../styles/cartDropdown.styles.scss';
import CartItem from './cartItem';
import { CartDropDownButtonStyle, CartDropDownStyles, CartItemsStyle, MessageStyle } from '../styles styledComponent/cartDropDown.styles';
const CartDropdown = () => {
  const cartItems = useSelector(({cart : {cartItems}})=> cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <CartDropDownStyles>
        <CartItemsStyle style={{overflowY : cartItems.length > 2 ? 'scroll' : 'none'}}>
          {
            cartItems.length ? (cartItems.map((cartItem) => <CartItem key={cartItem.id} item ={cartItem}/>))
            :(<MessageStyle>Your Cart is Empty</MessageStyle>)
          }
        </CartItemsStyle>
        <CartDropDownButtonStyle type='button' onClick={()=> {
          dispatch(toggle_hidden());
          navigate('checkout')
        }}>
          Go to Checkout
        </CartDropDownButtonStyle>
    </CartDropDownStyles>
  )
}

export default CartDropdown;