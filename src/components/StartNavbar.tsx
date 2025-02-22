import React from 'react'

import avtar from '../../images/photo/avtar.jpg'

import {Rajdhani} from 'next/font/google'
import { MdCall } from 'react-icons/md'

const rajdhani = Rajdhani({
    weight: "600"
})

const StartNavbar = () => {
  return (
    <div className='flex relative bg-white justify-between border-b-4 px-3 pt-8 pb-4 border-gray-200'>
        <img className='absolute h-[55%] rounded-full left-[50%] bottom-[-20px]' src={avtar.src} alt="avtar" />
     <a href="/">
     <div className='flex flex-col '>
        <h2 className={`green text-xl ${rajdhani.className}`}>Better</h2>
        <h3 className='text-xl text-gray-400'>Mortage</h3>
      </div>
     </a>
      <div className='flex gap-4 justify-center items-center'>
        <MdCall className='button rounded-full text-white p-1 size-[30px]'/>
        <h2>Need help? Call (415) 523 8837</h2>
      </div>
    </div>
  )
}

export default StartNavbar
