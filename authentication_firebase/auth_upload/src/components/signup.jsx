import React from 'react'
import '../styles/signup.styles.scss';
import FormInput from './formInput';
import CustomButton from './customButton';
import { auth, createUserProfile } from '../firebase/firebase.utils';
const Signup = () => {
  const [newUser, setNewUser] = React.useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });   
  const [checkPassword,setCheckPassword] = React.useState(false);
  const {displayName, email, password,passwordConfirm} = newUser;
  const atLeastOneCapitalChar =  /[A-Z]/g;
  const atLeastOneSmallChar = /[a-z]/g;
  const atLeastOneNum = /[0-9]/g;
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g;
  const eightCharsorMore = /.{8,}/g; 

  const handleChange =  (e)=>{
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
    var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,3})*$/;
    return regex.test(email);
  }

  const passwordTracker = {
    upperCaseCheck: password.match(atLeastOneCapitalChar),
    lowerCaseCheck: password.match(atLeastOneSmallChar),
    specialCharsCheck: password.match(atLeastOneSpecialChar),
    numCheck: password.match(atLeastOneNum),
    eightorMoreCheck: password.match(eightCharsorMore)
  }

  const passWordLength = Object.values(passwordTracker).filter(value => value).length;

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const { displayName, email, password, passwordConfirm } = newUser;
    // const errors=[];
    // console.log(password === passwordConfirm)
    if(nameCheck(displayName) && emailCheck(email))
    {
        if(password === passwordConfirm)
        {
          try{
             const {user} = await auth.createUserWithEmailAndPassword(email,password);
             await createUserProfile(user, {displayName});

             setNewUser({
              displayName:'',
              email:'',
              password:'',
              passwordConfirm:''
             })
          }catch(error)
          {
            if(error.message  === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).')
            {
              alert("Email already in use");
              return;
            }else{
              console.log(error.message);
            }
          }
        }else{
          alert('Passwords donot match');
          return;
        }
    }else{
       if(!nameCheck(displayName))
       {
        alert('Please enter a valid name with no numbers');
        return;
       }
       if(!emailCheck(email))
       {
        alert('Please enter a valid email address');
        return;
       }
    }
  }
  return (
    <div className='sign-up'>
        <h1 className='title'>I donot have an account</h1>
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
               onFocus ={()=> setCheckPassword(true)}
               onBlur ={() => setCheckPassword(false)}
               onChange={handleChange}
               required
            />
            {
              checkPassword && (
                <div>
                    {passWordLength < 5 && 'Must contain '}
                    {!passwordTracker.upperCaseCheck && 'one uppercase alphabet, '}
                    {!passwordTracker.lowerCaseCheck && 'one lowercase alphabet, '}
                    {!passwordTracker.numCheck && 'one number, '}
                    {!passwordTracker.specialCharsCheck && 'one special character, '}
                    {!passwordTracker.eightorMoreCheck && 'eight characters or more '}
                </div>
              )
            }
            <FormInput
               type="password"
               name="passwordConfirm"
               value={passwordConfirm}
               label = "Confirm Password"
               onChange={handleChange}
               required
            />
            {
              passWordLength >= 5 ? (
                  <CustomButton type="submit" style={{width:'100%'}}>Sign Up</CustomButton>
              ) : <CustomButton type="button" style={{cursor: 'not-allowed', backgroundColor: 'grey', width:'100%'} }>Waiting for credentials...</CustomButton>
            }
        </form>
    </div>
  )
}

export default Signup;