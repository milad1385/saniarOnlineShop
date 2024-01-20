import React from 'react'

function OrderStatus() {
  return (
    <div className='flex items-center justify-between   font-DanaDemiBold'>
        <div className='w-5 h-5 rounded-full bg-gray-500 shadow shrink-0'></div>
        <span className='block w-full h-1.5 bg-gray-200 order-active'></span>
        <div className='w-10 h-10 rounded-full bg-white shadow flex-center shrink-0 order-active-circle'>1</div>
        <span className='block w-full h-1.5 bg-gray-200'></span>
        <div className='w-10 h-10 rounded-full bg-white shadow flex-center shrink-0'>2</div>
        <span className='block w-full h-1.5 bg-gray-200'></span>
        <div className='w-10 h-10 rounded-full bg-white shadow flex-center shrink-0'>3</div>
        <span className='block w-full h-1.5 bg-gray-200'></span>
        <div className='w-5 h-5 rounded-full bg-gray-400 shadow shrink-0'></div>
    </div>
  )
}

export default OrderStatus