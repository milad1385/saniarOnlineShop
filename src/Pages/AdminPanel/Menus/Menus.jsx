import React, { useContext, useEffect } from 'react'
import AddNewMenu from "./AddNewMenu/AddNewMenu"
import MenusList from "./MenusList/MenusList"
import { AppContext } from '../../../App';
function Menus() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className='container'>
        <AddNewMenu/>
        <MenusList/>
    </div>
  )
}

export default Menus