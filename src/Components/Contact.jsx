import React from 'react'
import contact_img from '../../src/assets/contact.png'
const Contact = () => {
  return (
   <section className='pt-24 pb-12 bg-white' id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         
         <div className='flex flex-col md:flex-row gap-6 mb-12'>
            <div className='flex-shrink-0 bg-green-700 text-black py-2 px-16 rounded-md'>
                 <h2 className='text-2xl font-bold'>Contact-Us</h2>
            </div>
            <div className='md:w-2/3'>
               <p className='text-black md:w-2/3'>
                  Connect with us: <br />
                  Lets Discuss your 
               </p>
            </div>
         </div>

         <div className='flex flex-col md:flex-row justify-between bg-gray-600 rounded-lg md:p-8 p-4'>
            <div className='w-full md:w-1/2 p-4'> 
             <form className="space-y-4">
                <div className='flex flex-col md:flex-row md:space-x-4 items-start justify-start'>
                    <label className='flex items-center'>
                        <input type="radio" name='contact-type' className='mr-2' value='general'/>
                        Say Hi
                    </label>
                    <label className='flex items-center mt-2 md:mt-0'>
                        <input type="radio" name='contact-type' className='mr-2' value='quote'/>
                        Get A quote
                    </label>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name='name' id='name' className='mt-2 py-2.5 px-4 block w-full rounded-md  shadow-sm focus:outline-none focus:ring focus:ring-green-800' placeholder='Enter Your Name' />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="text" name='name' id='name' className='mt-2 py-2.5 px-4 block w-full rounded-md  shadow-sm focus:outline-none focus:ring focus:ring-green-800' placeholder='Enter Your Email' />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows='6'  type="text" name='message' id='name' className='mt-2 py-2.5 px-4 block w-full rounded-md  shadow-sm focus:outline-none focus:ring focus:ring-green-800' placeholder='Enter Your Meesage...' />
                </div>
                <button type='submit' className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-green-300 hover:text-black transition-all duration-300'>Send Message</button>
             </form>
            </div>

            <div className='relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden'>
               <img src={contact_img} alt="" className='md:absolute md:block hidden top-0 bottom-0 -right-8 h-full'/>
            </div>
         </div>
      </div>
   </section>
  )
}

export default Contact
