import React from 'react'
// import '../styles/sign-in-sign-up.styles.scss';
import Signin from './signn'
import Signup from './signup'
import { AuthenticationStyle } from '../styles styledComponent/authentication.styles';

const SigninSignup = () => {
  return (
    <AuthenticationStyle>
        <Signin/>
        <Signup/>
    </AuthenticationStyle>
  )
}

export default SigninSignup