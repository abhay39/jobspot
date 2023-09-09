import Image from 'next/image'
import React from 'react'
import cate from '../../images/category.jpg'; 
import {FaHeadset} from 'react-icons/fa';
import {FiCodesandbox} from 'react-icons/fi';
import {BsFillHouseDoorFill} from 'react-icons/bs';
import {BiRestaurant} from 'react-icons/bi';
import {GrDeliver} from 'react-icons/gr';
import {GiCelebrationFire} from 'react-icons/gi';
import {SiCashapp, SiGoogleanalytics} from 'react-icons/si';

const data=[
  {
    id:1,
    name:"Technical Support",
    desc:'58 Jobs Available', 
    icon:<FaHeadset size={40} color='blue'/>,
  },
  {
    id:2,
    name:"Business Development",
    desc:'49 Jobs Available', 
    icon:<FiCodesandbox size={40} color='black'/>,
  },
  {
    id:3,
    name:"Real Estate Business",
    desc:'33 Jobs Available', 
    icon:<BsFillHouseDoorFill size={40} color='black'/>,
  },
  {
    id:4,
    name:"Share Market Analysis",
    desc:'39 Jobs Available', 
    icon:<SiGoogleanalytics size={40} color='black'/>,
  },
  {
    id:5,
    name:"Finance & Banking Service",
    desc:'38 Jobs Available', 
    icon:<SiCashapp size={40} color='black'/>,
  },
  {
    id:6,
    name:"Home Delivery Service",
    desc:'85 Jobs Available', 
    icon:<GrDeliver size={40} color='black'/>,
  },
  {
    id:7,
    name:"Restaurant Service",
    desc:'48 Jobs Available', 
    icon:<BiRestaurant size={40} color='black'/>,
  },
  {
    id:8,
    name:"Defence & Fire Service",
    desc:'15 Jobs Available', 
    icon:<GiCelebrationFire size={40} color='black'/>,
  },
]
const Category = () => {
  return (
    <section className='bg-[#fefefe] sm:h-[100%] md:h-[100vh]  p-12'>
      <div className='flex items-center justify-center'>
        <Image src={cate} alt='Category' height={200} />
      </div>
      <div className='mt-20  flex-row flex-wrap justify-between items-center col-start-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {data.map((item)=>(
          <div key={item.id} className='mt-8 flex items-center  justify-between bg-slate-200 h-28 p-3 cursor-pointer rounded-lg w-[250px] shadow-md '> 
          <div>
            {item.icon}
          </div>
          <div className='ml-2'>
            <h3 className='text-xl font-semibold'>{item.name}</h3>
            <p className='text-base font-mono'>{item.desc}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Category