import React, { useState } from 'react'
import '../styles/signup.styles.scss';
import { auth, createUserProfile } from '../firebase/firebase.utils';
import CustomButton from './customButton';
import FormInput from './formInput';
const Signup = () => {
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });  
  const {displayName, email, password,passwordConfirm} = newUser;
  const handleChange =(e)=>{
    const {name,value} = e.target;
    setNewUser({
        ...newUser,
        [name]: value
    })
  }
  const nameCheck = (name)=>{
    var regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  }
  const emailCheck = (email)=>{
    var regex =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return regex.test(email);
  }
  const passwordCheck = (password)=>{
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const { displayName, email, password, passwordConfirm } = newUser;
    const errors=[];
    if(nameCheck(displayName) && emailCheck(email) && passwordCheck(password)){
        
    }else{
        
    }
  
  }
  return (
    
    <div className='sign-up'>
        <h2 className='title'>I donot have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
               type="text" 
               name="displayName"
               value={displayName}
               label = "Name"
               onChange={handleChange}
               required 
            />
            <FormInput
               type="email"
               name="email"
               value={email}
               label = "Email"
               onChange={handleChange}
               required
            />
            <FormInput
               type="password"
               name="password"
               value={password}
               label = "Password"
               onChange={handleChange}
               required
            />
            <FormInput
               type="password"
               name="passwordConfirm"
               value={passwordConfirm}
               label = "Confirm Password"
               onChange={handleChange}
               required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
        </form>
    </div>
  )
}

export default Signup