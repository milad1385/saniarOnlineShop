import React, { useContext, useEffect } from 'react'
import AddNewUser from './AddNewUser/AddNewUser'
import UsersList from './UsersList/UsersList'
import { AppContext } from '../../../App';

function users() {
  const { setIsShowAdminMenu , setAdminSearch } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
    setAdminSearch("");
  }, []);
  return (
    <div className='container'>
      <AddNewUser/>
      <UsersList/>
    </div>
  )
}

export default users