import React from 'react'
import testimonialsData from '../assets/testimonialsData'
import { BsChatQuote } from 'react-icons/bs'

const Testimonials = () => {
  return (
   <section className='pt-24 pb-8 bg-white' id='testimonials'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        

        <div className='flex flex-col md:flex-row gap-4 mb-12'>
          <div className='flex-shrink-0 bg-green-500 text-black py-2 px-16 rounded-md'>
            <h2 className='text-2xl font-bold'>Testimonials</h2>
          </div>
          <div className='md:w-2/3'>
              <p className='text-secondary md:w-2/3'>Hear from our satisfied clients Read our testimonials to learn more about our digital marketing services.</p>
          </div>
        </div>

        <div className='relative mb-12'>
           <div className='flex flex-col md:flex-row max-w-7xl mx-auto overflow-hidden'>
            {
                testimonialsData.slice(0,3).map((testimonial,index) => (
                    <div key={index} className='w-full relative py-5 md:max-w-md px-2'>
                       <div className='absolute top-0 left-0 z-30'>
                         <BsChatQuote className='size-8'/>
                       </div>
                       <div className='md:h-48 h-52 bg-white hover:bg-green-500 rounded-lg  border hover:border-green-700 shadow-lg p-6 cursor-pointer transition-all duration-300'>
                         <p className='text-lg font-medium mb-4'>{testimonial.text}</p>
                         <p className='text-sm font-semibold text-gray-700'>{testimonial.author}</p>
                       </div>
                    </div>
                ))
            }
           </div>
        </div>

        
      </div>
   </section>
  )
}

export default Testimonials
