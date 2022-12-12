import React from 'react'
import '../styles/header.styles.scss';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {Link, NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
             {/* <img className='logo' src={logo} alt='logo'/> */}
             <Link to='/'>
                <Logo className='logo'/>
             </Link>
        </div>    
        <div className='navigation'>
            <NavLink className='option' to='shop'>Shop</NavLink>
            <NavLink className='option' to='shop'>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header