import React from 'react'
import Table from '../../../Components/AdminPanel/Table/Table'
import AddNewUser from './AddNewUser/AddNewUser'
import UsersList from './UsersList/UsersList'

function users() {
  return (
    <>
      <AddNewUser/>
      <UsersList/>
    </>
  )
}

export default users