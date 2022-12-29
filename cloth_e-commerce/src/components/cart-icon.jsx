import React from 'react'
import '../styles/cartIcon.styles.scss';
import {ReactComponent as CartLogo} from '../assets/shopping-bag.svg'
const CartIcon = () => {
  return (
    <div className='cart-icon'>
        <CartLogo className='cart-logo'/>
        <span className = 'item-count'>0</span>
    </div>
  )
}

export default CartIcon;