import React from 'react';
import './singleUser.css';
function SingleUser({user}) {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${user.id}?set=set5&size=180x180`} alt="monsters"/>
        <h2>{user.name}</h2>
        <h5>{user.email}</h5>
    </div>
  )
}

export default SingleUser;