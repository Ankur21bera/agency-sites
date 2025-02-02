import React, { useState } from 'react'
import teamData from '../assets/teamData'
import { FaLinkedin } from 'react-icons/fa'

const Team = () => {

    const [visibleTeam, setVisibleTeam] = useState(6);
    const handleShowMore = () => {
        setVisibleTeam(prevCount => prevCount + 3)
    }
  return (
    <section className='pt-24 pb-12 bg-white' id='team'>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          <div className='flex flex-col md:flex-row gap-4 mb-12'>
            <div className='flex-shrink-0 bg-yellow-400 text-black py-2 px-16 rounded-md'>
               <h2 className='text-2xl font-bold'>Team</h2>
            </div>
            <div className='md:w-2/3'>
             <p className='text-black md:w-1/2'>Meet the skill and experienced team behind our successful digital marketing strategies.</p>
            </div>
          </div>


          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                teamData.slice(0,visibleTeam).map((member,index)=> (
                    <div key={index} className='bg-white hover:bg-green-400 rounded-lg border hover:border-green-400 shadow-lg p-6 cursor-pointer transition-all duration-300'>
                     <div className='relative mb-4'>
                          <div className='flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start'>
                            <img src={member.image} alt="" className='rounded-full w-32 h-32 object-cover'/>
                            <div>
                                <h3 className='text-xl font-semibold'>{member.name}</h3>
                                <p className='text-black'>{member.position}</p>
                            </div>
                            <a href="#" className='absolute top-0 right-0 bg-black hover:bg-green-500 hover:text-black text-white p-2 rounded-full cursor-pointer transition-al duration-300'>
                                <FaLinkedin className='size-5'/>
                            </a>
                          </div>
                     </div>

                     <div className='px-2'>
                       <hr className='my-4 border-black'/>
                       <p className='text-black'>{member.description}</p>
                     </div>
                    </div>
                ))
            }
          </div>

          <div className='flex justify-end mt-8 w-full'>
            <button onClick={handleShowMore} className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-green-500 hover:text-black transition-all duration-500'>See All</button>
          </div>
       </div>
    </section>
  )
}

export default Team
