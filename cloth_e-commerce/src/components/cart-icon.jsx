import React from 'react'
import '../styles/cartIcon.styles.scss';
import {ReactComponent as CartLogo} from '../assets/shopping-bag.svg'
import { useSelector } from 'react-redux';
const CartIcon = () => {
  const totalProducts = useSelector(({cart : {cartItems}})=> cartItems.reduce(((acc,cartItem) => acc + cartItem.quantity),0))
  return (
    <div className='cart-icon'>
        <CartLogo className='cart-logo'/>
        <span className = 'item-count'>{totalProducts}</span>
    </div>
  )
}

export default CartIcon;