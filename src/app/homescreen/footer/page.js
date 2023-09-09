import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const FooterPage = () => {
  return (
    <footer className='bg-[#2d2d2d]'>
        <div>
            <div>
                <h1>Jobspot</h1>
                <p>Contrary to popular belief, lorem ipsum is not simply random text.</p>
                <div className='flex bg-white'>
                    <input className='outline-none border-none' placeholder='Your email'/>
                    <AiOutlineArrowRight className='bg-orange-300 p-3 rounded-md' size={20} />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </footer>
  )
}

export default FooterPage