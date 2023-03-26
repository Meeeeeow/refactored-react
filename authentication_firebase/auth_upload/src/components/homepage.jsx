import React from 'react'
import '../styles/homepage.styles.scss';
import AdminDashboard from './adminDashboard';
import UserDashboard from './userDashboard';



const Homepage = () => {

  return (
    <div>
        <AdminDashboard/>
        <UserDashboard/>
    </div>
  )
}

export default Homepage;