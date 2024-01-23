import React from 'react'

function DeleteModal() {
  return (
    <div className='bg-black/50 fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white w-[400px] py-8 px-3'>
            <h3 className='font-MorabbaBold text-2xl text-center'>آیا از حذف کردن اطمینان دارید ؟</h3>
            <div className='flex items-center justify-center gap-x-5 mt-8'>
                <button className='bg-blue-600 text-white font-MorabbaBold px-16 py-4 text-xl'>بله</button>
                <button className='bg-gray-600 text-white font-MorabbaBold px-16 py-4 text-xl'>خیر</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal