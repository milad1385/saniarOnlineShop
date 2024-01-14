import React from 'react'

function Baners() {
  return (
    <div className='container grid grid-cols-2  lg:grid-cols-3 gap-5 my-10'>
        <div>
            <img src='/images/category/banner-11.jpg' className='shadow-md rounded-lg hover:-translate-y-1.5 transition-all duration-200'/>
        </div>
        <div>
            <img src='/images/category/banner-12.jpg' className='shadow-md rounded-lg hover:-translate-y-1.5 transition-all duration-200'/>
        </div>
        <div>
            <img src='/images/category/banner-13.jpg' className='shadow-md rounded-lg hover:-translate-y-1.5 transition-all duration-200'/>
        </div>
    </div>
  )
}

export default Baners