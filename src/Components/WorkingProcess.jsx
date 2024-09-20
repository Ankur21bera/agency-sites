import React, { useState } from 'react'
import processSteps from '../assets/processSteps';
import { FaMinus, FaPlus } from 'react-icons/fa';

const WorkingProcess = () => {

    const [openIndex,setOpenIndex] = useState(0);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }
  return (
    <section className='pt-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
  
       <div className='flex flex-col md:flex-row gap-4 mb-12'>
         <div className='flex-shrink-0 bg-green-400 text-black py-2 px-16 rounded-md'>
             <h2 className='text-2xl font-bold'>Our Working Process</h2>
         </div>
         <div className='md:w-2/3'>
           <p className='text-black md:w-2/3'>Step By Step guide to achieving business goals</p>
         </div>
       </div>

       <div>
        {
            processSteps.map((step,index)=> (
                <div key={index}>
                  <button onClick={()=>handleToggle(index)} className={`w-full text-left p-4 flex justify-between items-center ${openIndex === index ? 'bg-green-500': "bg-teritiary"}`}>
                    <div className='flex items-center'>
                        <span className='text-black font-extrabold text-2xl mr-4'>{step.number}</span>
                        <h3 className='text-lg font-semibold'>{step.question}</h3>
                    </div>

                    <div>
                        {
                            openIndex === index ? (<FaMinus/>) : (<FaPlus/>)
                            
                        }
                    </div>
                  </button>
                  {
                    openIndex === index && (
                        <div className='p-4 bg-green-500 text-black'>
                           <hr className='mt-0 mb-5 border-black'/>
                           <p>{step.answer}</p>
                        </div>
                    )
                  }
                </div>
            ))
        }
       </div>
      </div>
    </section>
  )
}

export default WorkingProcess
