import React from 'react'

function EmptyError({msg}) {
  return (
    <div className='bg-red-600 text-white flex-center py-7 text-base md:text-2xl rounded-md shadow font-DanaDemiBold'>
        {msg}
    </div>
  )
}

export default EmptyError