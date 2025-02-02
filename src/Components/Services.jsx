import React from 'react'
import { servicesData } from '../assets/services'
import { div } from 'framer-motion/client'
import linkicon from '../../src/assets/link-icon.png'
const Services = () => {
  return (
    <div className='pt-12 pb-16 bg-white' id='services'>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
           <div className='flex flex-col md:flex-row gap-4 mb-12'>
            <div className='flex shrink-0 bg-green-400 text-black py-2 px-16 rounded-md'>
                <h2 className='text-2xl font-bold'>Services</h2>
            </div>
            <div className='md:w-2/3'>
                <p className='text-black md:w-2/3'>At Our Digital Marketing Agency we offer a range of services to help business grow and suceed online. these service includes</p>
            </div>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
               servicesData.map((service, index)=> (
                <div key={index} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191a23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}>
                   <div className='md:w-1/2 flex flex-col h-full justify-between'>
                    <button className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}>{service.title}</button>
                    <a href="#" className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}>
                        <img src={linkicon} alt="" className='size-6 rounded-full' />
                        <span className='text-lg font-medium'>Learn More</span>
                    </a>
                   </div>

                   <div className='md:w-1/2 order-first md:order-last'>
                      <img src={service.image} alt="" />
                   </div>
                </div>
               ))
            }
           </div>
       </div>
    </div>
  )
}

export default Services
