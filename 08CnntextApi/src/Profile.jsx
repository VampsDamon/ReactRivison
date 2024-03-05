import React from 'react'
import { useContext } from 'react'
import UserContext from './Context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    if (!user) return (<p>Login First</p>)
  return (
    <div>Username : {user.username} and Password : {user.password}</div>
  )
}

export default Profile