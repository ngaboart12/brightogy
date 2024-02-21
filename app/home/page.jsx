import React from 'react'
import Image from "next/image"
import Navbar from 'components/Navbar'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-full h-[100vh] bg-[#1D73AF] relative'>
            <div className='w-full h-full absolute'>
                <Image src={`/image/Banner.svg`} width={1000} height={1000} className='w-full h-full object-cover absolute' />
            </div>
            <Navbar color="white"/>
        </div>
      
    </div>
  )
}

export default Home
