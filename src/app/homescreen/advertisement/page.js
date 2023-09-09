import Image from 'next/image'
import React from 'react'
import ad from '../../images/ad.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Advertisement = () => {
  return (
    <section className='bg-[#fefefe] sm:h-[100%] md:h-[100vh]  p-12 items-center justify-center'>
        <div className='flex-col sm:flex md:flex-row items-center'>
            <div className='mr-10'>
                <Image src={ad} alt='ad' className='sm:h-[250px]sm:w-[250px] md:h-[500px] md:w-[800px] w-[800px]'/>
            </div>
            <div>
            <h1 class="text-6xl font-bold sm:text-2xl md:text-6xl lg:text-6xl">
                Trusted & Popular Job Portal
                </h1>
                <p className='text-xl'>
                Find your dream job from thousands daily updates job vacancies. Find the best
                job online from UK, USA job sites or apply directly on a business website.
                Search and find jobs today!
                </p>

                <div className='flex justify-around mt-6' >
                    <button className='bg-[#2d2d2d] items-center flex p-4 rounded-2xl text-white'>
                        Post a Job
                        <AiOutlineArrowRight size={20} color='white'/>
                    </button>
                    <button className=' items-center flex p-4 rounded-2xl border-2 border-black '>
                        Search a Job
                        <AiOutlineArrowRight size={20} color='black'/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advertisement