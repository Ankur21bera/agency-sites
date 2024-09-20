import { section } from 'framer-motion/client'
import cta_image from '../../src/assets/cta-image.png'
import React from 'react'

const Cat = () => {
  return (
    <section className='relative py-12'>
      <div className='max-w-7xl mx-auto bg-[#f3f3f3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
           <h1 className='text-4xl font-bold text-black mb-4'>Lets Make Thing Happen</h1>
           <p className='text-gray-600 mb-6'>Contact us today to learn more about how our digital marketing services can help your business to grow and suceed online.</p>
           <button className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-green-500 hover:text-black'>Get Your Free Proposal</button>
        </div>

        <div className='md:w-1/2 flex justify-center items-center relative'>
            <img src={cta_image} alt="" className='md:absolute md:-top-52 md:bottom-0' />
        </div>
      </div>
    </section>
  )
}

export default Cat
