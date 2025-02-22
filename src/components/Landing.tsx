'use client'
import React, { useState } from 'react'
import BorderedButton from './BorderedButton'
import ImageCard from './ImageCard'
import amanda from '../../images/photo/amanda.webp'
import arian from '../../images/photo/arian.webp'
import paul from '../../images/photo/paul.webp'



const Landing = () => {

//   const [arinaActive, setArianActive] = useState(true)
//   const [amandaActive, setAmandaActive] = useState(false)
//   const [paulActive, setPaulActive] = useState(false)
  const [activePerson, setActivePerson] = useState("arian")
  return (
    <div className='flex gap-[350px] justify-between items-center px-[120px] py-[90px]'>
      <div className='w-[55%]'>
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
      <div className='flex justify-left items-start flex-col'>
        <h1 className='text-[100px] text-left leading-[90px] text-black font-medium'>Find out why we're better</h1>
        <button className='bg-[#004733] text-white px-8 py-4 my-3 rounded-full '>See all our stories</button>
        <div className='text-gray-500 flex gap-2 justify-center items-center'>
          <div>
          <span className='text-[#004733] size-5'>★</span>Trustpilot
          </div>
          <div>excellent</div>
          <div><span className='font-bold'>4.4</span>out of 5</div>
        </div>
      </div>
    </div>
  )
}


export default Landing
