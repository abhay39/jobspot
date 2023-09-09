import Image from 'next/image'
import React from 'react'
import {AiOutlineCloudUpload, AiOutlineSearch} from 
'react-icons/ai';
import headerImage from '../images/header.jpg';
import Heading from './heaing/page';
import Category from './category/page';
import Advertisement from './advertisement/page';
import FeaturedJobs from './featuredJobs/page';
import Popular from './popular/page';
import FooterPage from './footer/page';

const HomeScreen = () => {
  return (
    <>
        <Heading />
        <Category />
        <Advertisement />
        <FeaturedJobs />
        {/* <Popular /> */}
        <FooterPage />
    </>
  )
}

export default HomeScreen