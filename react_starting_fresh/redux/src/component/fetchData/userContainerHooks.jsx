import React , { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../store/actions/actions';
import { store } from '../../store';
import Header from '../header/header';
import UserList from '../userList/userList';
import Footer from '../footer/footer';
function UserContainerHooks() {
  useEffect(()=>{
    store.dispatch(fetchUsers());
  },[])
  const {isLoading,users,error,searchField} = useSelector((state)=>state);
  const [delState,setDelState] = React.useState(false);
 

  console.log(users);
  let [delUsers,setDelUsers] = React.useState(users); 
  console.log(delUsers);
  var filteredUsers = users.filter(user=>(
    user.name.toLowerCase().includes(searchField.toLowerCase())
  ))

  var filteredDeletedUsers=[];

  const handleDelete = id =>{
    console.log(id);
    filteredDeletedUsers = delUsers.filter(user=> id !== user.id)
    setDelState(true);
    setDelUsers(filteredDeletedUsers);

  }
  useEffect(()=> {
    setDelUsers(filteredUsers)
  },[searchField])

  return (
    <div>
        <h1>{filteredUsers.length}</h1>
        <Header/>
        {
            isLoading ? <h1>Loading...</h1>
            : error ? <h3>{error}</h3>
            : <div>
                <UserList allUsers = {delUsers} onDel={handleDelete}/>
            </div>
        }
        <Footer/>
    </div>
  )
}

export default UserContainerHooks;