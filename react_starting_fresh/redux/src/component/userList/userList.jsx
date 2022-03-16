import React from 'react'
import SingleUser from '../user/singleUser';
import './user-list.css';
function UserList({allUsers}) {
  return (
    <div className='user-list'>
        {
            allUsers && allUsers.map(user=>(
                <SingleUser key={user.id} user={user}/>
            ))
        }
       
    </div>
  )
}

export default UserList;