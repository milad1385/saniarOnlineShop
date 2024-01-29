import React from 'react'
import AddNewMenu from "./AddNewMenu/AddNewMenu"
import MenusList from "./MenusList/MenusList"
function Menus() {
  return (
    <div className='container'>
        <AddNewMenu/>
        <MenusList/>
    </div>
  )
}

export default Menus