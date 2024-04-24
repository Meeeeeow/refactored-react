import React ,{useRef , useState , useEffect } from 'react'
import { faCheck , faTimes , faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  
  const [user,setUser] = useState('');
  const [validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);

  const [pwd,setPwd] =  useState('');
  const [validPwd,setValidPwd] = useState(false);
  const [pwdFocus,setPwdFocus] = useState(false);

  const [matchPwd,setMatchPwd] = useState('');
  const [validMatchPwd,setValidMatchPwd] = useState(false);
  const [matchPwdFocus,setMatchPwdFocus] = useState(false);

  const[errMsg,setErrMsg] = useState('');
  const[success,setSuccess] = useState(false);

  useEffect(()=>{
      userRef.current.focus();
  },[])

  useEffect(()=>{
      const result = USER_REGEX.test(user);
      console.log(result);
      console.log(user);
      setValidName(result);
  },[user])

  useEffect(()=>{
      const result = PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);
      setValidPwd(result);
      const match = pwd === matchPwd; 
      setValidMatchPwd(match);
  },[pwd,matchPwd])

  useEffect(()=>{
      setErrMsg('');
  },[user,pwd,matchPwd])

  const handleSubmit = async (e) =>{
      e.preventDefault();

      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      if(!v1 || !v2)
      {
          setErrMsg("invalid entry");
          return;
      }
      console.log(user,pwd);
      setSuccess(true);
  }
  return (
    <>
        {
            success ? (
                <section>
                    <h1>Success</h1>
                    <p>
                        <a href="#">Sign in</a>
                    </p>
                </section>
            ):(
                <section>
                    <p ref={errRef} className={errMsg ? 'err-msg' : 'off-screen'}>{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            UserName

                            <span className={validName ? 'valid' : 'hide' }>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={validName || !user ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon ={faTimes}/>
                            </span>
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            ref={userRef}
                            onChange={(e)=> setUser(e.target.value)}
                            autoComplete="off"
                            required
                            aria-invalid ={validName ? 'false' : 'true'}
                            aria-describedby = "uidNote"
                            onFocus={(e)=>setUserFocus(true)}
                            onBlur={(e)=>setUserFocus(false)} 
                        />

                        <p id="uidNote" className={userFocus && user && !validName ? 'instructions' : 'off-screen'}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            4 to 24 characters<br/>
                            Must begin with a letter<br/>
                            Letters,numbers,underscore and hyphen allowed.
                        </p>

                        <label htmlFor="password">
                            Password

                            <span className={validPwd ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e)=> setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby = 'pwdNote'
                            onFocus={(e)=>setPwdFocus(true)}
                            onBlur={(e)=>setPwdFocus(false)}
                        />
                        <p id="pwdNote" className={pwdFocus && !validPwd ? 'instructions' : 'off-screen'}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            8 to 24 characters<br/>
                            Must include uppercase and lowercase letters,a number and a special character<br/>
                            Allowed special Characters:<span aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span><span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span><span aria-label='percent'>%</span>

                        </p>

                        <label htmlFor="confirmPassword">
                            Confirm Password

                            <span className={validMatchPwd && matchPwd ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </span>
                            <span className={validMatchPwd || !matchPwd ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={(e)=> setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatchPwd ? 'false' : 'true'}
                            aria-describedby = 'confirmPwdNote'
                            onFocus={(e)=>setMatchPwdFocus(true)}
                            onBlur={(e)=>setMatchPwdFocus(false)}
                        />
                        <p id="confirmPwdNote" className={matchPwdFocus && !validMatchPwd ? 'instructions' : 'off-screen'}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Must be the same length and contain same characters of the password

                        </p>
                        <button disabled={!validName || !validPwd || !validMatchPwd ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already Registered<br/>
                        <span className='line'>
                            <a href="#">
                                Sign In
                            </a>
                        </span>
                    </p>
                </section>
            )
        }
    </>
  )
}

export default Register;