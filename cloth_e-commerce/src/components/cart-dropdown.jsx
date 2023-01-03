import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomButton from './customButton'
import { useSelector, useDispatch } from 'react-redux';
import { toggle_hidden } from '../store/actions/action';
import '../styles/cartDropdown.styles.scss';
import CartItem from './cartItem';
const CartDropdown = () => {
  const cartItems = useSelector(({cart : {cartItems}})=> cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='cart-dropdown'>
        <div className='cart-items' style={{overflowY : cartItems.length > 2 ? 'scroll' : 'none'}}>
          {
            cartItems.length ? (cartItems.map((cartItem) => <CartItem key={cartItem.id} item ={cartItem}/>))
            :(<span className='empty-message'>Your Cart is Empty</span>)
          }
        </div>
        <CustomButton type='button' onClick={()=> {
          dispatch(toggle_hidden());
          navigate('checkout')
        }}>Go to Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;