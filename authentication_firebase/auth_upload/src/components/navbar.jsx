import React from 'react'
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { auth } from '../firebase/firebase.utils';
import '../styles/navbar.styles.scss';
const Navbar = () => {
  const currentUser = useSelector(({user: {currentUser}}) => currentUser);
  console.log(currentUser);
  return (
    <div className='navbar'>
        <div className='logo-container'>
            Uploader
        </div>    
        <div className='navigation'>

            {
                currentUser ? (currentUser.email.includes('admin') ? <NavLink className='option' to='admin'>ADMIN</NavLink> : <NavLink className='option' to='user'>USER</NavLink>) : <NavLink className='option' to='about'>ABOUT</NavLink>
            }
           {
            currentUser ?  <NavLink className='option' to='viewall'>ALL UPLOADS</NavLink> : <NavLink className='option' to='contact'>CONTACT</NavLink>
           }
            {
              currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> :
                <NavLink to='/' className='option' >SIGN IN</NavLink>
            }
           
        </div>
        
    </div>
  )
}

export default Navbar;