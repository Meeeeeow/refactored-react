import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
// import '../styles/contact.styles.scss';
import CustomButton from './customButton';
import { ContactStyle, InputStyle, TextAreaStyle } from '../styles styledComponent/contact.styles';
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
    
    <ContactStyle>
        <h1 className='title'>Have some Questions?</h1>
        <form ref={form} onSubmit={sendEmail}>
          <p><label htmlFor='displayName'>Name</label></p>
          <InputStyle
             type="text" 
             name="displayName"
             value={name}
             onChange={(e)=> setName(e.target.value)}
             required 
          />
          <p><label htmlFor='email'>Email</label></p>
          <InputStyle
             type="email" 
             name="email"
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
             required 
          />
          <p><label htmlFor='message'>Enter your message here</label></p>
            <TextAreaStyle
              type='text'
              name='message'
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              required 
              rows='4'
              cols='50'
          />

          <CustomButton type="submit" style={{width:'100%'}}> Send Message</CustomButton>
        </form>
    </ContactStyle>
  )
}

export default Contact