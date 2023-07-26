import React from 'react'
import {ReactComponent as Logo} from '../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import {  useSelector, useDispatch } from 'react-redux'; 
import { toggle_hidden } from '../store/actions/action';
import CartIcon from './cart-icon';
import CartDropdown from './cart-dropdown';
import { HeaderContainer, LogoContainer, NavigationContainer, NavlinkOption } from '../styles styledComponent/header.styles';
const Header = () => {
  //console.log( currentUser ? currentUser.displayName : '') useSelector((state) => state.user.currentUser);
  const currentUser = useSelector(({user: {currentUser}}) => currentUser);
  const toggleHidden = useSelector(({cart: {hidden}}) => hidden);
  const dispatch = useDispatch();
  // const [toggleHidden,setToggleHidden] = useState(false);
  // console.log(toggleHidden);
  return (
    <HeaderContainer>
        <LogoContainer>
             {/* <img className='logo' src={logo} alt='logo'/> */}
             <Link to='/'>
                <Logo className='logo'/>
             </Link>
        </LogoContainer>    
        <NavigationContainer>
            <NavlinkOption to='shop'>SHOP</NavlinkOption>
            <NavlinkOption to='contact'>CONTACT</NavlinkOption>
            {
              currentUser ? <NavlinkOption as= 'div' onClick={()=> auth.signOut()}>SIGN OUT</NavlinkOption> :
                <NavlinkOption to='signin'>SIGN IN</NavlinkOption>
            }
            <div onClick={()=> dispatch(toggle_hidden())}>
              <CartIcon/>
            </div>
        </NavigationContainer>
        
        {
          toggleHidden && (<CartDropdown/>)
        }
        
    </HeaderContainer>
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