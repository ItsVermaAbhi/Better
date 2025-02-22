import React from 'react'

import avtar from '../../images/photo/avtar.jpg'


import { MdCall } from 'react-icons/md'

const StartNavbar = () => {
  return (
    <div className='flex relative bg-white justify-between border-b-4 px-3 pt-8 pb-4 border-gray-200'>
        <img className='absolute h-[40%] lg:h-[55%] rounded-full left-[50%] bottom-[-20px]' src={avtar.src} alt="avtar" />
     <a href="/">
     <div className='flex flex-col '>
      
        <h3 className='lg:text-xl text-base text-gray-400'>Mortage</h3>
      </div>
     </a>
      <div className='flex gap-4 justify-center items-center'>
        <MdCall className='button rounded-full text-white p-1 size-[30px]'/>
        <h2 className='text-base lg:text-xl'>Need help? Call (415) 523 8837</h2>
      </div>
    </div>
  )
}

export default StartNavbar
