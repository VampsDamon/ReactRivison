import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId,name}=useParams();
  return (
    <div>User :{userId} and Name : {name}</div>
  )
}

export default User