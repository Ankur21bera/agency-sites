import React from 'react'

const FooterContact = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8'>
         <div className='flex-1 space-y-4'>
            <button className='bg-green-500 text-black px-6 py-2 rounded-md font-medium'>Contact</button>
            <div className='text-white space-x-2'>
                <p><strong>Email:</strong>contactagency25@gmail.com</p>
                <p><strong>Phone:</strong>123456789</p>
                <p><strong>Address:</strong>1234 india</p>
            </div>


         </div>

         <div className='flex-1 bg-[#292a32] justify-center items-center p-8 rounded-md'>
           <form className='flex flex-col justify-center items-center h-20 md:flex-row gap-4'>
            <input type="email" placeholder='ENTER YOUR EMAIL' className='flex-1 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' />
            <button className='bg-green-500 text-black px-6 py-2.5 rounded-md font-medium'>Contact</button>
           </form>
         </div>
      </div>
    </div>
  )
}

export default FooterContact
