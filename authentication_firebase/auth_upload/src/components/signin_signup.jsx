import React from 'react'
import '../styles/signin-signup.styles.scss';
import Signin from './signin';
import Signup from './signup';
const SigninSignup = () => {
  return (
    <div className='signin-signup'>
        <Signin/>
        <Signup/>
    </div>
  )
}

export default SigninSignup;