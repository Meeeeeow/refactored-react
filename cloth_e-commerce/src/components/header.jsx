import React from 'react'
import '../styles/header.styles.scss';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {Link, NavLink} from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
const Header = ({currentUser}) => {
  //console.log( currentUser ? currentUser.displayName : '')
  return (
    <div className='header'>
        <div className='logo-container'>
             {/* <img className='logo' src={logo} alt='logo'/> */}
             <Link to='/'>
                <Logo className='logo'/>
             </Link>
        </div>    
        <div className='navigation'>
            <NavLink className='option' to='shop'>SHOP</NavLink>
            <NavLink className='option' to='shop'>CONTACT</NavLink>
            {
              currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> :
                <NavLink className='option' to='signin'>SIGN IN</NavLink>
            }
        </div>
    </div>
  )
}

export default Header