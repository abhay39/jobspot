import Image from 'next/image'
import React from 'react'
import {AiOutlineCloudUpload, AiOutlineSearch} from 
'react-icons/ai';
import headerImage from '../../images/header.jpg';

const Heading = () => {
  return (
    <section className="bg-[#c2e4ff]  lg:h-[100vh] w-[100%] p-12 sm:h-[100%]">
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-xl font-bold hover:cursor-pointer'>Jobspot</h1>
            </div>
            <header>
            <nav >
                <ul className='flex justify-evenly hidden sm:inline sm:flex'>
                    <li className='ml-4  cursor-pointer hover:text-red-600'>Home</li>
                    <li className='ml-4 cursor-pointer hover:text-red-600'>About Us</li>
                    <li className='ml-4 cursor-pointer hover:text-red-600'>Find Jobs</li>
                    <li className='ml-4 cursor-pointer hover:text-red-600'>Candidate</li>
                    <li className='ml-4 cursor-pointer hover:text-red-600'>Advice</li>
                </ul>
            </nav>
        </header>
        <div className='flex items-center hidden sm:inline sm:flex'>
            <ul className='m-2'>
                <li>Sign In</li>
            </ul>
            <button className='bg-[#0090ff] flex p-3 rounded text-white justify-evenly'>
                <div>
                    Upload Resume
                </div>
                <AiOutlineCloudUpload size={25} />
            </button>
        </div>
        </div>

        <div className='mt-6 flex flex-col sm:flex-row md:flex-row items-center justify-between md:mt-28 xl:mt-28'>
        <div>
            <h2 className='text-8xl font-bold xs:text-xl xl:text-8xl'>Find the job that fits your life</h2>
            <p className='text-sm sm:text-base lg:text-lg mt-8'>Let users know that you provide customer support and have a section for frequently asked questions to assist them.</p>
            <div className='flex flex-col bg-white p-6 rounded-xl items-center justify-evenly sm:flex-row mt-8'>
                <div>
                    <h3>Location</h3>
                    <input className='outline-none border-none bg-slate-200 rounded-lg p-2 mt-2' placeholder='Enter location'/>
                </div>
                <div>
                    <h3>Type</h3>
                    <input className='outline-none border-none bg-slate-200 rounded-lg p-2 mt-2' placeholder='Enter type of job'/>
                </div>
                <div>
                    <button className='bg-[#2d2d2d] items-center justify-center flex p-3 rounded text-white mt-2'>
                        <AiOutlineSearch size={20} color='white' />
                        Search Job
                    </button>
                </div>
            </div>
        </div>
        <div>
            <Image src={headerImage} alt='heading' height={500} width={1000}/>
        </div>
    </div>
    </section>
  )
}

export default Heading