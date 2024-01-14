import React from 'react'
import PageTitle from '../../../Components/UserPanel/PageTitle/PageTitle'

function SendTicket() {
  return (
    <>
      <PageTitle title={'ارسال تیکت'} icon={'plane'}/>
      <div className='bg-white  rounded-md shadow p-[18px] mt-6 space-y-6'>
        <div className='flex flex-col'>
          <label htmlFor="department" className='font-DanaDemiBold text-lg'>دپارتمان</label>
          <select id='department' className='outline-none bg-gray-100 mt-3 text-gray-500 rounded-md py-3 px-4'>
            <option value="-1">دپارتمان مورد نظر ...</option>
            <option value="1">مالی</option>
            <option value="2">پشتیبانی</option>
            <option value="3">مدیریت</option>
            <option value="4">بخش فنی</option>
            <option value="5">ارتباط با مدرس</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="title" className='font-DanaDemiBold text-lg'>موضوع تیکت</label>
          <input className='outline-none bg-gray-100 mt-3 text-gray-500 rounded-md py-3 px-4' placeholder='موضوع تیکت را وارد کنید ...'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="title" className='font-DanaDemiBold text-lg'>متن تیکت</label>
          <textarea className='outline-none bg-gray-100 mt-3 text-gray-500 rounded-md py-3 px-4 h-52' placeholder='متن  تیکت را وارد کنید ...'/>
        </div>
        <div className='flex items-center justify-end'>
          <button className='bg-blue-600 p-3 rounded-md text-white shadow-blue flex-center gap-x-2'>ارسال تیکت
            <svg className='w-5 h-5 rotate-180'>
              <use href='#plane'></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default SendTicket