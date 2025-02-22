import StartNavbar from '@/components/StartNavbar'
import React from 'react'
import first from '../../../images/photo/first.png'
import second from '../../../images/photo/second.png'
import third from '../../../images/photo/third.png'
import percent from '../../../images/photo/percent.png'
import dollar from '../../../images/photo/dollar.png'
import mobile from '../../../images/photo/mobile.png'
import { StaticImageData } from 'next/image'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div className='lg:px-[120px] px-[50px] pt-[0px]'>
    <div className='fixed w-[85%]'>
    <StartNavbar />
    </div>
    <div className='pt-[180px]'>
    <Content/>
   
    </div>
      <Footer/>
    </div>
  )
}


function Content(){
    return (
        <div className='pb-9'>
           <div className='flex flex-col gap-2 items-center'>
           <h1 className='text-5xl font-bold'>
            Hi, I'm Betsy!
            
            </h1>
            <h1  className='text-5xl font-bold'>What can I help you with?</h1>
           </div>

           <div className='flex flex-col items-center pt-9 gap-4 justify-center'>
            <CustomDiv content='Buying a home' img={first} />
            <CustomDiv content='Refinance my mortage' img={second} />
            <CustomDiv content='Get cash from my home' img={third} />
            <Promotion/>
           </div>
        </div>
    )
}

function CustomDiv({content, img}: {content: string, img: StaticImageData}){
    return (
        <div className={`
        flex items-center px-3 gap-2 border-2 border-gray-300 rounded-lg py-2 w-[50%] hover:border-4 hover:ease-in-out hover:duratin-200 hover:border-[#067a41]
        `}>
            <div className='w-[80%] flex gap-3 items-center'>
                <img className='w-[15%] img' src={img.src} alt="" />
                <div className='text-lg lg:text-2xl font-bold'>
                {content}
                </div>
            </div>
            
        </div>
    )
}

function Promotion(){
    return(
        <div className='flex flex-col pt-8 gap-8'>
            <div className='flex gap-8 items-center '>
                <div className='flex flex-col items-center gap-2'>
                    <h3 className='font-semibold text-3xl'>$100B</h3>
                    <p>home loans funded entirely online</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h3 className='font-semibold text-3xl'>400K</h3>
                    <p>Customers who chose a Better Mortgage</p>
                </div>
            </div>

            <div className='light-green flex rounded-lg items-center justify-ceter flex-col gap-3 py-5 px-8'>
                <p>After Few questions you will unlock:</p>
                <div className='flex flex-col items-start'>
                <div className='flex gap-2 items-center justify-center'>
                <img className='w-[5%] img' src={percent.src} alt="" />
                    <p>Custom mortgage rates</p>
                </div>
                <div  className='flex gap-2 items-center justify-center'>
                <img className='w-[5%] img' src={dollar.src} alt="" />
                    <p> Exclusive offers   </p>
                 </div>

                 <div  className='flex gap-2 items-center justify-center'>
                 <img className='w-[5%] img' src={mobile.src} alt="" />
                    <p>A personalized dashboard </p>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default page
