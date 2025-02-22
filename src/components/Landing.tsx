'use client'
import React, { useState } from 'react'
import BorderedButton from './BorderedButton'
import ImageCard from './ImageCard'
import amanda from '../../images/photo/amanda.webp'
import arian from '../../images/photo/arian.webp'
import paul from '../../images/photo/paul.webp'



const Landing = () => {

  const [activePerson, setActivePerson] = useState("arian")
  return (
    <div className='flex flex-col md:flex-row  gap-9 md:justify-between items-center md:px-[120px] py-[90px]'>
      <div className='order-2 md:order-1 w-[55%]'>
        <div>
           {activePerson == "arian" && <ImageCard card={arian}/>}
           {activePerson == "amanda" && <ImageCard card={amanda}/>}
           {activePerson == "paul" && <ImageCard card={paul}/>}
        </div>
        <div className='flex gap-2'>
          <BorderedButton content='Arian' active={activePerson} onClick={()=> setActivePerson("arian")}></BorderedButton>
          <BorderedButton content='Amanda' active={activePerson} onClick={()=> setActivePerson("amanda")}></BorderedButton>
          <BorderedButton content='Paul' active={activePerson} onClick={()=> setActivePerson("paul")}></BorderedButton>
      
        </div>
      </div>
      <div className='order-1 md:order-2 flex justify-center items:center md:justify-left md:items-start flex-col'>
        <h1 className='text-[60px] md:text-[80px] md:leading-[90px] lg:text-[90px] lg:leading-[90px] text-left leading-[90px] text-black font-medium '>Find out why we're better</h1>
        <button className='bg-[#004733] text-white px-8 py-4 my-3 rounded-full  '>See all our stories</button>
        <div className='text-gray-500 flex gap-2 justify-center items-center'>
          <div className=''>
          <span className='text-[#004733] size-5'>★</span>Trustpilot
          </div>
          <div>excellent</div>
          <div className=''><span className='font-bold'>4.4 </span>out of 5</div>
        </div>
      </div>
    </div>
  )
}


export default Landing
