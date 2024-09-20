import React from 'react'
import logo1 from '../../src/assets/logos/amazon.png'
import logo2 from '../../src/assets/logos/dribble.png'
import logo3 from '../../src/assets/logos/hubspot.png'
import logo4 from '../../src/assets/logos/netflix.png'
import logo5 from '../../src/assets/logos/notion.png'
import logo6 from '../../src/assets/logos/zoom.png'
const LogoCarousel = () => {
  return (
    <div className='pt-24 overflow-hidden'>
       <div className='flex space-x-12 justify-between items-center animate-marquee'>
         <img src={logo1} alt="" className='h-12' />
         <img src={logo2} alt="" className='h-12'/>
         <img src={logo3} alt="" className='h-12'/>
         <img src={logo4} alt="" className='h-12'/>
         <img src={logo5} alt="" className='h-12'/>
         <img src={logo6} alt="" className='h-12'/>
       </div>
    </div>
  )
}

export default LogoCarousel
