import React , { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/actions';
import { store } from '../../store';
import Header from '../header/header';
import UserList from '../userList/userList';
import Footer from '../footer/footer';
function UserContainerHooks() {
  const {isLoading,users,error,searchField} = useSelector((state)=>state);
  useEffect(()=>{
    store.dispatch(fetchUsers());
  },[])

  const filteredUsers = users.filter(user=>(
    user.name.toLowerCase().includes(searchField.toLowerCase())
  ))
  console.log(filteredUsers);
  return (
    <div>
        
        <Header/>
        {
            isLoading ? <h1>Loading...</h1>
            : error ? <h3>{error}</h3>
            : <div>
                <UserList allUsers = {filteredUsers}/>
            </div>
        }
        <Footer/>
    </div>
  )
}

export default UserContainerHooks;