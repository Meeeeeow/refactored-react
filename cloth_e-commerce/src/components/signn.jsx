import React,{useState} from 'react'
import FormInput from './formInput';
// import '../styles/signin.styles.scss';
import CustomButton from './customButton';
import {auth,  signInWithGoogle } from '../firebase/firebase.utils';
import { ButtonStyles, SignInStyles, TitleStyles } from '../styles styledComponent/signin.styles';
const Signin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(email,password);
      setEmail('');
      setPassword('');
    }catch(error){
      console.log(error.message);
    }

  
    
  }  

  // const handleChange =(e)=>{
  //   const {value , name} = e.target;
  //   if(name === 'email')
  //     setEmail(value);
  //   else if(name === 'password')
  //     setPassword(value);
  // }
  // console.log(email,password);
  return (
    <SignInStyles>
        <TitleStyles>I Already have an account</TitleStyles>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
              name ="email" 
              type="email" 
              value={email} 
              label="Email"
              required
              onChange={(e)=> setEmail(e.target.value)}
            />
            <FormInput 
              name ="password" 
              type="password" 
              value={password} 
              label="Password"
              required
              onChange={(e)=> setPassword(e.target.value)}
            />
            <ButtonStyles>
              <CustomButton type="submit"> Sign in</CustomButton>
              <CustomButton type= "button" onClick={signInWithGoogle} isGoogleSignedin> Sign in with Google</CustomButton>
            </ButtonStyles>
        </form>

    </SignInStyles>
  )
}

export default Signin