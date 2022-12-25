import React from 'react'
import '../styles/sign-in-sign-up.styles.scss';
import Signin from './signn'
import Signup from './signup'

const SigninSignup = () => {
  return (
    <div className='signin-signup'>
        <Signin/>
        <Signup/>
    </div>
  )
}

export default SigninSignup