import React from 'react'
import '../styles/signin.styles.scss';
import FormInput from './formInput';
import CustomButton from './customButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
const Signin = () => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  
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
  return (
    <div className='sign-in'>
    <h1 className='title'>I Already have an account</h1>
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
        <div className='buttons'>
          <CustomButton type="submit"> Sign in</CustomButton>
          <CustomButton type= "button" onClick={signInWithGoogle} isGoogleSignedin> Sign in with Google</CustomButton>
        </div>
    </form>

</div>
  )
}

export default Signin;