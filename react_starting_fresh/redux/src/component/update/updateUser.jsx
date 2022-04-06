import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const UpdateUser = (props) => {
  const [user,setUser]  = useState({});
  const [loading,setLoading] = useState(true);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
        console.log(response.data.email);
        setUser(response.data)
        setUsername(response.data.username);
        setEmail(response.data.email);
    })
    .finally(()=>setLoading(false))
},[id]);
 let usera = user.username;
 usera = 'rahim'
 console.log(usera);
// console.log(user);
console.log(username);
console.log(email);

const handleChange = (e) =>{
  if(e.target.type === "text")
    setUsername(e.target.value);
  else if(e.target.type === "email")
    setEmail(e.target.value);
}

const handleSubmit =(e) =>{
  e.preventDefault();
  user.username = username;
  user.email = email;
  console.log(user);
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
  method: 'PUT',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

 console.log(props.abc);
}
  return (
    <div className="container">
      
        <h1>Full Details of User {id}</h1>
        {
            loading ? (<h2>Loading...</h2>)
            :(
                <form className="user-full" onSubmit={handleSubmit}>
                   <div className="user-final">
                    <div className="user-general">
                        <h4>{user.name}</h4>
                        <strong>Username:</strong>
                        <span><input type="text" value={username} name="username" onChange={handleChange}/></span><br/>
                        <strong>Email:</strong>
                        <span><input type="email" value={email} name="email" onChange={handleChange}/></span><br/><br/>
                    </div>
                    <div className="user-address">
                        <strong>Address Details:</strong><br/>
                        <strong>Street:</strong>
                        <span>{user.address.street}</span><br/>
                        <strong>Suite:</strong>
                        <span>{user.address.suite}</span><br/>
                        <strong>City:</strong>
                        <span>{user.address.city}</span><br/>
                        <strong>Zipcode:</strong>
                        <span>{user.address.zipcode}</span><br/>
                    </div>
                    <div className="extra">
                        <strong>Phone:</strong>
                        <span>{user.phone}</span><br/>
                        <strong>Website:</strong>
                        <span>{user.website}</span><br/><br/>
                    </div>
                    <div className="company">
    
                        <strong>Company Details</strong><br/>
                        <strong>Name:</strong>
                        <span>{user.company.name}</span><br/>
                        <strong>Catch Phrase:</strong>
                        <span>{user.company.catchPhrase}</span><br/>
                        <strong>BS:</strong>
                        <span>{user.company.bs}</span><br/><br/>
                    </div>
                    <div className="img-final">
                   <img src={`https://robohash.org/${user.id}?set=set5&size=180x180`} alt="monsters"/>
                   </div>
                   <input className="submit" type="submit" value="Submit Form"/>
                   </div>

                   
                  
                </form>
            )
        }
    </div>
  )
}
