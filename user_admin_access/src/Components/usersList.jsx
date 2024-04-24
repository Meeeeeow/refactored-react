import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json(); 
        setUsers(data.users || []); 
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers(); 
  }, []);


  const renderUsers = () => {
    if (!Array.isArray(users)) return null;
    return users.map((user, index) => (
      <div key={index} className="border rounded p-4 mb-4">
        <h3 className="text-lg font-semibold">{user.username}</h3>
        <p className="text-gray-600">Role: {user.role}</p>
      </div>
    ));
  };


  const totalUsers = users.length;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderUsers()}
      </div>
      <div className="mt-4">
        Total Users: {totalUsers}
      </div>
    </div>
  );
};

export default UsersList;
