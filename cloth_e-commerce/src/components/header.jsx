import React,{ useState } from 'react'
import '../styles/header.styles.scss';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {Link, NavLink} from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { connect, useSelector, useDispatch } from 'react-redux'; 
import { toggle_hidden } from '../store/actions/action';
import CartIcon from './cart-icon';
import CartDropdown from './cart-dropdown';
const Header = () => {
  //console.log( currentUser ? currentUser.displayName : '') useSelector((state) => state.user.currentUser);
  const currentUser = useSelector(({user: {currentUser}}) => currentUser);
  const toggleHidden = useSelector(({cart: {hidden}}) => hidden);
  const dispatch = useDispatch();
  // const [toggleHidden,setToggleHidden] = useState(false);
  // console.log(toggleHidden);
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
            <div onClick={()=> dispatch(toggle_hidden())}>
              <CartIcon/>
            </div>
        </div>
        
        {
          toggleHidden && (<CartDropdown/>)
        }
        
    </div>
  )
}

// const mapStatetoProps = state =>{
//   return{
//     currentUser : state.user.currentUser
//   }
// }
// const mapStatetoProps = {user} =>{
//   return{
//     currentUser : user.currentUser
//   }
// }
// export default connect(mapStatetoProps)(Header)
export default Header;