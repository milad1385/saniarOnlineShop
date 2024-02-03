import React, { useContext, useEffect } from 'react'
import AddNewUser from './AddNewUser/AddNewUser'
import UsersList from './UsersList/UsersList'
import { AppContext } from '../../../App';

function users() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className='container'>
      <AddNewUser/>
      <UsersList/>
    </div>
  )
}

export default users