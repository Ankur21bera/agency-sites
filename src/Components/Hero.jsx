import React from 'react'
import banner_image from '../../src/assets/banner.png'
import LogoCarousel from './LogoCarousel'

const Hero = () => {
  return (
    <section className='bg-white pt-12' id='about'>
     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24'>
       <div className='flex flex-col md:flex-row items-center gap-6'>
        <div className='md:w-1/2'>
        <div className='md:w-2/3'>
          <h1 className='text-4xl font-bold text-black mb-4'>Navigating the digital landscape for success.</h1>
          <p className='text-gray-600 mb-6'>Our Digital marketing agency helps businesses grow and succeed online through a range of services including seo,ppc,media marketing and content creation.</p>
          <button className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-green-500 hover:text-black'>Book A Consultation</button>
        </div>
        </div>
        <div className='md:w-1/2 order-first md:order-last'>
          <img src={banner_image} alt="" className='w-full h-auto rounded-md' />
        </div>
        </div>

        <LogoCarousel/>
       </div>
    </section>
  )
}

export default Hero
