// pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('/users.json');
      const data = await response.json();
      const user = data.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', user.role);
        localStorage.setItem('username', user.username);
        setTimeout(()=>{
          navigate("/dashboard");
        },800)
        
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Error fetching user data');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-80">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;
