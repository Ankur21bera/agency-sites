import React from 'react'
import footer_logo from '../../src/assets/footer-logo.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import FooterContact from './FooterContact'
const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='bg-black rounded-t-2xl'>
         <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12'>
            <div>
              <img src={footer_logo} alt="" className='h-8'/>
            </div>

            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
                <a href="#about" className='text-white hover:text-gray-600'>Home</a>
                <a href="#services" className='text-white hover:text-gray-600'>Services</a>
                <a href="#use-cases" className='text-white hover:text-gray-600'>Use Cases</a>
                <a href="#contact" className='text-white hover:text-gray-600'>Contact</a>
            </div>

            <div className='flex md:justify-end space-x-4'>
                <a href="#" className='p-1.5 text-black rounded-full bg-white'>
                    <FaFacebook className='text-black hover:text-gray-400'/>
                </a>
                <a href="#" className='p-1.5 text-black rounded-full bg-white'>
                    <FaTwitter className='text-black hover:text-gray-400'/>
                </a>
                <a href="#" className='p-1.5 text-black rounded-full bg-white'>
                    <FaLinkedin className='text-black hover:text-gray-400'/>
                </a>
            </div>
         </div>

         <FooterContact/>

         <hr className='my-4 border-white mx-4 sm:px-6 lg:px-8'/>
         <div className='flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5'>
            <p>2024@. All Rights Reserved</p>
            <p className='underline underline-offset-4'><a href="#">Privaxy Policy</a></p>
         </div>
        </div>
    </footer>
  )
}

export default Footer
