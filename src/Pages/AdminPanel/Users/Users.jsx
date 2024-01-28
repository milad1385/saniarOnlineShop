import React from 'react'
import AddNewUser from './AddNewUser/AddNewUser'
import UsersList from './UsersList/UsersList'

function users() {
  return (
    <div className='container'>
      <AddNewUser/>
      <UsersList/>
    </div>
  )
}

export default users