import React from 'react'
import {Lato} from "next/font/google"

import heroImage from "../../images/photo/hero-image.webp"
import googlelogo  from "../../images/photo/google.png"
import star  from "../../images/photo/star.png"
import halfStar  from "../../images/photo/halfStar.png"
import { TbClockHour6 } from 'react-icons/tb'

const lato = Lato({
    weight: "900"
})


const HeroPage = () => {
  return (
    <div className='relative h-[110vh] bg-[#004733] pb-[100px] z-10 overflow-hidden'>
      <img className='absolute h-[50vw] pb-[100px] bottom-[-20%] left-[34%]' src={heroImage.src} alt="" />
      <div className='absolute top-[15%] left-[25%] w-[45vw] leading-[100px]'>
        <h1 className={`text-[#1ee07f] pt-[50px] text-[120px] leading-[120px] text-center ${lato.className}`}>Mortages made simple</h1>
      </div>
      <div className='absolute bottom-[35%] left-[15%] text-center'>
        <div className='flex flex-col '>
            <button className=' text-xl bg-[#1ee07f] py-5 px-8 rounded-full text-black'>Start my approval</button>
        </div>
        <div className='pt-2 flex gap-2 justify-center text-center text-[15px] text-stone-300'>
            <div className='pt-[2px] text-[15px]'> <TbClockHour6 /></div>
            <div><p>3 min | No credit impact</p></div>
        </div>
      </div>

      <div className='absolute flex flex-col  gap-2 justify-center item-center bottom-[40%] right-[25%] text-center'>

       <div className='flex gap-2 justify-center item-center'>
       <div className=''>
            <img className='w-[24px]' src={googlelogo.src} alt="" />
        </div>
        <div className='flex size-[24px] gap-2'>
            <img src={star.src} alt="" />
            <img src={star.src} alt="" />
            <img src={star.src} alt="" />
            <img src={star.src} alt="" />
            <img src={halfStar.src} alt="" />
        </div>
       </div>

       <div className='pt-0 pl-[130px] flex gap-2 justify-center items-center text-center text-[13px] text-stone-300'>
        <p className=''>4.6 stars | 3177 google reviews</p>
       </div>


      </div>
    </div>
  )
}

export default HeroPage
