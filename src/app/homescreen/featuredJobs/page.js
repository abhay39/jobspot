import Image from 'next/image'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineLocationOn } from 'react-icons/md'
import micro from '../../images/micro.png';

const FeaturedJobs = () => {
  return (
    <section className='flex flex-col sm:h-[100%] md:h-[100vh]  bg-[#ffddc2] items-center  p-8'>
        <h1 className='sm:text-3xl text-3xl md:text-6xl font-bold font-serif'>Featured Jobs</h1>
        <p className='mt-2 text-center'>Hand-picked jobs featured depending on popularity and benifits.</p>
        <div className='flex flex-wrap  justify-between sm:flex-col sm:items-center sm:justify-center mt-2'>
            <div className='border-2 shadow-lg p-4 cursor-pointer border-black rounded-lg mt-6  h-44  sm:h-48'>
                <h2 className='text-xl font-semibold'>Visual Design Landing Page Team</h2>
                <div className='flex items-center mt-2  mb-4 opacity-[0.8]'>
                    <div className='flex items-center'>
                        <MdOutlineLocationOn size={15} color={'black'}/>
                        <p> Chennai,India</p>
                    </div>
                    <div className='flex items-center ml-3'>
                        <AiOutlineClockCircle size={15} color={'black'}/>
                        <p> Internship</p>
                    </div>
                </div>
                <hr color='black'/>
                <div className='mt-3 mb-2 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='bg-black rounded-full w-10 h-10 items-center justify-center flex'>
                            <Image src={micro} alt='compnay logo' className='h-6 w-6 '/>
                        </div>
                        <div className='ml-2'>
                            <h4 className='font-bold'>Microsoft</h4>
                            <p>5 days ago</p>
                        </div>
                    </div>
                    <div>
                        <button className="bg-slate-400 p-3 rounded text-black">Apply Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default FeaturedJobs