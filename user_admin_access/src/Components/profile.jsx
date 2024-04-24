import React from 'react'

const Profile = () => {
    const user = localStorage.getItem("username");
    const role = localStorage.getItem("role");
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-4">
          <h1 className="text-3xl font-semibold mb-4">Profile</h1>
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <p className="mt-1 text-lg font-semibold text-gray-900">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
