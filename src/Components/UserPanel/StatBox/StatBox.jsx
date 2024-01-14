import React from 'react'

function StatBox({title , icon , count}) {
  return (
    <div className='bg-white shadow rounded-md'>
      <div className='flex items-center gap-x-3 py-[25px] px-4'>
        <svg className='w-8 h-8 text-blue-600 icon'>
            <use href={`#${icon}`}></use>
        </svg>
        <span className='font-DanaDemiBold text-lg'>{title}</span>
        <div className='bg-[#ed9209] flex-center text-white px-2 rounded-full font-DanaDemiBold text-xs'><span className='mt-[2.5px]'>{count}</span></div>
      </div>
    </div>
  )
}

export default StatBox
