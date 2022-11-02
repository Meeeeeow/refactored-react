import React,{useState , useEffect} from 'react'

const Signin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
  }  
  return (
    <div className='sign-in'>
        <h1>Already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            
        </form>

    </div>
  )
}

export default Signin