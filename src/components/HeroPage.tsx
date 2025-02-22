import React from 'react'


import heroImage from "../../images/photo/hero-image.webp"
import googlelogo  from "../../images/photo/google.png"
import star  from "../../images/photo/star.png"
import halfStar  from "../../images/photo/halfStar.png"
import { TbClockHour6 } from 'react-icons/tb'
import Image from 'next/image'




const HeroPage = () => {
  return (
    <div className='relative h-[110vh] w-full  md:h-[110vh] bg-[#004733] md:pb-[100px] z-10 overflow-hidden'>
      <Image className='absolute left-[16%] sm:left-[25%] h-[72%] bottom-[-10%] md:h-[90vh] md:pb-[100px] md:h-[80vw] md:bottom-[-20%] lg:left-[35%] lg:h-[50vw] md:left-[30%]' src={heroImage.src} alt="" />
      <div className='absolute top-[15%] left-[25%] w-[45vw] leading-[100px]'>
        <h1 className={`text-[#1ee07f] leading-[50px] pl-[10px] pt-[20px] text-[42px] sm:text-[40px] md:pt-[50px] lg:text-[110px] lg:leading-[100px] md:text-[70px] md:leading-[80px] text-center `}>Mortages made simple</h1>
      </div>
      <div className='absolute top-[29%] left-[29%] sm:left-[28%] md:top-[60%] md:left-[15%] text-center'>
        <div className='flex flex-col '>
            <button className=' md:text-xl bg-[#1ee07f] md:py-5 md:px-8 rounded-full text-black px-[50px] sm:px-[70px] text-base sm:text-lg  py-4 '>Start my approval</button>
        </div>
        <div className='pt-2 flex gap-2 justify-center text-center text-[15px] text-stone-300'>
            <div className='pt-[2px] text-[15px]'> <TbClockHour6 /></div>
            <div><p>3 min | No credit impact</p></div>
        </div>
      </div>

      <div className='absolute flex flex-col  gap-2 justify-center items-center bottom-[2%]  right-[40%]  md:bottom-[30%] md:right-[25%] text-center'>

       <div className='flex gap-2 justify-center item-center'>
       <div className=''>
            <Image className='w-[24px]  ' src={googlelogo.src} alt="" />
        </div>
        <div className='flex size-[24px]  gap-2'>
            <Image src={star.src} alt="" />
            <Image src={star.src} alt="" />
            <Image src={star.src} alt="" />
            <Image src={star.src} alt="" />
            <Image src={halfStar.src} alt="" />
        </div>
       </div>



       <div className='hidden sm:block pt-0 pl-[40px] flex gap-2 justify-center items-center text-center text-[13px] text-stone-300 ]'>
        <p className='ml-[90px]'>4.6 stars | 3177 google reviews</p>
       </div>


      </div>
    </div>
  )
}

export default HeroPage
