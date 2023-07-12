import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import '../styles/contact.styles.scss';
import CustomButton from './customButton';
const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message, setMessage] = useState('');
  const currentUser = useSelector(({user : currentUser})=> currentUser);
  console.log(currentUser);
  
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_1r6kk4l','template_tsh9iqm',form.current,'7QbqJ239XcCWI6H-4').then((result)=>{
      console.log(result.text);
      alert('Thank you for sending your feedback');
      setName('');
      setEmail('');
      setMessage('');
    }, error => {
      console.log(error.text);
      alert('Error is sending message. Please try again');
    });
  };

  return (
    
    <div className='contact'>
        <h1 className='title'>Have some Questions?</h1>
        <form ref={form} onSubmit={sendEmail}>
          <p><label htmlFor='displayName'>Name</label></p>
          <input
             type="text" 
             name="displayName"
             value={name}
             onChange={(e)=> setName(e.target.value)}
             required 
          />
          <p><label htmlFor='email'>Email</label></p>
          <input
             type="email" 
             name="email"
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
             required 
          />
          <p><label htmlFor='message'>Enter your message here</label></p>
            <textarea
              type='text'
              name='message'
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              required 
              rows='4'
              cols='50'
          />

          <CustomButton type="submit"> Send Message</CustomButton>
        </form>
    </div>
  )
}

export default Contact