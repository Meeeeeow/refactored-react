import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const UpdateUser = () => {
  const [user,setUser]  = useState({});
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
        setUser(response.data)
    })
    .finally(()=>setLoading(false))
},[id]);
 let usera = user.username;
 usera = 'rahim'
 console.log(usera);
console.log(user);
  return (
    <div>{user.username}</div>
  )
}
