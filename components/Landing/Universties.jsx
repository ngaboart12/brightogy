import React from 'react'
import Image from "next/image"

const Universties = () => {
  const university = [
    {
      image: "/image/vistula.png"
    },
    {
      image: "/image/britis.png"
    },
    {
      image: "/image/online.png"
    },
    {
      image: "/image/auniveristy.png"
    },
    {
      image: "/image/name.png"
    },
    {
      image: "/image/alte.png"
    },
  ]
  return (
    <div className='w-full flex flex-col py-10 gap-[20px] items-center'>
      <h1 className=' uppercase font-[700] text-[18px] text-[#005164]'>Features universities</h1>

    <div className='grid grid-cols-3 md:grid-cols-6 gp-[10px] '>
      {university.map((item,index)=>{
        return(
          <div className='w-full h-[100px]'>
            <Image src={item.image} width={200} height={200} className='w-full h-full object-cover' />
          </div>
        )
      })}
      
      
    </div>
      </div>
  )
}

export default Universties
