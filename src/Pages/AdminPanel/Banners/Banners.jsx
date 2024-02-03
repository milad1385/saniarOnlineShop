import React, { useContext, useEffect } from 'react'
import AddNewBanner from './AddNewBanner/AddNewBanner'
import BannersList from './BannersList/BannersList'
import { AppContext } from '../../../App';

function Banners() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className='container'>
      <AddNewBanner/>
      <BannersList/>
    </div>
  )
}

export default Banners