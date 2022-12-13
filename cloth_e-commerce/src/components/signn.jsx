import React,{useState} from 'react'
import FormInput from './formInput';
import '../styles/signin.styles.scss';
import CustomButton from './customButton';
import { signInWithGoogle } from '../firebase/firebase.utils';
const Signin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setEmail('');
    setPassword('');
    
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
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>
        </form>

    </div>
  )
}

export default Signin