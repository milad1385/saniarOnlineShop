import React from 'react'
import PageTitle from '../../../Components/UserPanel/PageTitle/PageTitle'
import LikelyProductCard from '../../../Components/UserPanel/LikelyProductCard/LikelyProductCard'
import Pagination from '../../../Components/Pagination/Pagination'

function LikelyProducts() {
  return (
    <>
      <PageTitle title={'لیست علاقه مندی ها'} icon={'heart'}/>
      <div className='bg-white rounded-md shadow mt-6'>
        <p className='bg-gray-200 font-DanaDemiBold p-2 rounded-tl-md  rounded-tr-md'>علاقه مندی ها</p>
        <div className='px-5 py-2 divide-y-2'>
          <LikelyProductCard/>
          <LikelyProductCard/>
          <LikelyProductCard/>
          <LikelyProductCard/>

        </div>
      </div>
      <Pagination/>
    </>
  )
}

export default LikelyProducts
