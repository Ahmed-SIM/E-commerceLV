import React from 'react'

export default function loading() {
  return (
    <div className='h-screen  flex justify-center items-center '>
      

      {/* spinner by fontAwesome but we havenot linked it  */}
<i className='fa-solid fa-spinner fa-spin fa-10x text-blue-300'></i>

    </div>
  )
}
