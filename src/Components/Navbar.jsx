import React, { useState } from 'react'
import logo from '../../src/assets/logo.png'
import { a } from 'framer-motion/client'
import { HiOutlineLockClosed, HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
const Navbar = () => {

    const menuItems = [
        {name: 'About us', href:'#about'},
        {name: 'Services', href:'#services'},
        {name: 'Use Cases', href:'#use-cases'},
        {name: 'Team', href:'#team'},
        {name: 'Testimonials', href:'#testimonials'},
    ]

    const [isOpen,setIsOpen] = useState(false);
    const [activeItem,setActiveItem] = useState('');

    const toggleMenu = () => {

        setIsOpen(!isOpen)
    }
    const handleMenuClick = (name) => {
        setActiveItem(name);
        setIsOpen(false);

    }
     return (
    <nav>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
           <div className=''>
             <a href="/">
             <img src={logo} alt="" className='h-8'/>
             </a>
           </div>

           <div className='space-x-8 hidden md:flex'>
            {
                menuItems.map((item,index)=> (
                    <a  onClick={() => handleMenuClick(item.name)} className={`text-black px-2 mt-2 hover:bg-green-500 rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name? 'text-yellow-500' : ''}`} key={index} href={item.href}>{item.name}</a>
                ))
            }
            <a href="#contact" className='border px-4 py-2 border-black hover:bg-green-500 hover:border-green-600 rounded-md transition-all duration-300'>Request a Quote</a>
           </div>

           <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-gray-700 hover:text-gray-400 focus:outline-none'>
                {
                    isOpen? <HiOutlineLockClosed className='size-6'/> : <HiOutlineMenuAlt3 className='size-6'/>
                }
            </button>
           </div>
        </div>
        </div>

        {
            isOpen && (
                <div className='md:hidden bg-white shadow-md'>
                   <div className='px-4 pt-2 pb-3 space-y-1 sm:px-3'>
                   {
                menuItems.map((item,index)=> (
                    <a className=' block text-black px-2 mt-2 hover:bg-green-500 rounded-sm hover:underline underline-offset-4 transition-all duration-300' key={index} href="">{item.name}</a>
                ))
            }
              <a href="#contact" className='block border px-4 py-2 border-black hover:bg-green-500 hover:border-green-600 rounded-md transition-all duration-300'>Request a Quote</a>

                   </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar
