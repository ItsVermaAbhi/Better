'use client'

import React, { useState } from 'react'
import BorderedButton from './BorderedButton'
import { IoIosArrowRoundForward } from 'react-icons/io'
import home from '../../images/photo/home.webp'
import oneDay from '../../images/photo/one-day.webp'
import heloc from '../../images/photo/better-heloc.webp'
import insurance from '../../images/photo/insurance.webp'
import mortgageCalculator from '../../images/photo/mortgage-calculator.webp'
import affordabilityCalculator from '../../images/photo/affordability-calculator.webp'
import helocCalculator from '../../images/photo/heloc-calculator.webp'
import fixedRateCalculator from '../../images/photo/fixed-rate-calculator.webp'
import goodDti from '../../images/photo/good-dti.webp'
import realtor from '../../images/photo/buy-house-without-realtor.webp'
import timeline from '../../images/photo/loan-timeline.webp'
import conventional from '../../images/photo/conventional-loan.webp'

const Services = () => {
    const [active, setActive ] = useState("Our products")
  return (

    
    <div className='flex flex-col gap-4 pb-[100px] px-[120px]'>
     <div className='flex flex-col gap-2'>
        <h2 className='text-4xl font-bold'>Got Questions?</h2>
        <div className='flex flex-col lg:flex-row    gap-4 justify-between '>
            <div><h2 className='text-4xl font-bold'>We have got answers</h2></div>
            <div className='flex gap-3'>
                <BorderedButton active={active} content='Our products' onClick={()=> setActive("Our products")}/>
                <BorderedButton content='Calculators' active={active} onClick={()=> setActive("Calculators")}/>
                <BorderedButton content='Guides & FAQs' active={active} onClick={()=> setActive("Guides & FAQs")}/>
            </div>

        </div>
     </div>

    {active == "Our products" && <div>
        <div className="grid  lg:grid-cols-3 gap-6">
            <div className="border-2 flex flex-col gap-6 py-[8%] px-[15%]  bg-[#f0f7f1] ">
                <h2 className='text-[#004733] font-semibold text-2xl'>Buying Your first home with Better</h2>
                <div><IoIosArrowRoundForward className='font-bold size-8 border-2 
                hover:bg-[#004733] hover:text-white ease-in-out duration-200 text-[#004733] rounded-full  border-gray-400'/></div>
                <img className='rounded-lg' src={home.src} alt="home" />
            </div>
            <div className="flex gap-3 border-2  lg:col-span-2 lg:col-start-2  px-[5%] py-[4%] bg-[#f0f7f1]">
            <div className='flex flex-col gap-6'>
                <h2 className='text-[#004733] font-semibold text-2xl'>One Day Mortage<sup>1</sup></h2>
                <p className='text-[#004733]'>Kick your home laon into hyperdrive. Going from locked rate to commitment Letter takes weeks for traditianal lenders. We do it in a singele  day.
                    Traditinal lenders deliver a Commitment letter in a few weeks.<sup>1</sup>
                </p>
                <div><IoIosArrowRoundForward className='font-bold size-8 border-2
                hover:bg-[#004733] hover:text-white ease-in-out duration-200 text-[#004733] rounded-full  border-gray-400'/></div>
            </div>
            <div>
                <img src={oneDay.src} alt="" />
            </div>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 mt-8 gap-6">
            <div className="flex gap-5 border-2  lg:col-span-2 lg:col-start-1  px-[5%] py-[4%] bg-[#f0f7f1]">
                <div className=''>
                    <img className='rounded ' src={heloc.src} alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-[#004733] font-semibold text-2xl'>Better HELOC<sup>1</sup></h2>
                    <p className='text-[#004733]'>Introducing one day HELOC- your express lane to getting cash from your home with
                        our Home Equity Line of Credit. Access upto 90% of your home equity as cash in as little as 7 days.<sup>1</sup>
                    </p>
                    <div><IoIosArrowRoundForward className='font-bold size-8 border-2 text-[#004733] hover:bg-[#004733] hover:text-white ease-in-out duration-200 rounded-full  border-gray-400'/></div>
                </div>
                
                </div>

                <div className="border-2 flex flex-col gap-6 py-[8%] px-[15%]  bg-[#f0f7f1] ">
                    <h2 className='text-[#004733] font-semibold text-2xl'>Insurance</h2>
                    <div><IoIosArrowRoundForward className='font-bold size-8 border-2 text-[#004733] rounded-full
                    hover:bg-[#004733] hover:text-white ease-in-out duration-200  border-gray-400'/></div>
                    <img className='rounded-lg' src={insurance.src} alt="home" />
                 </div>

                
        </div>
     </div>}

     {active == "Calculators" && <div>
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="border-2 flex flex-col gap-6 py-[8%] px-[15%]  bg-[#f0f7f1] ">
                <h2 className='text-[#004733] font-semibold text-2xl'>Mortage Calculator</h2>
                <div><IoIosArrowRoundForward className='font-bold size-8 border-2
                hover:bg-[#004733] hover:text-white ease-in-out duration-200 text-[#004733] rounded-full  border-gray-400'/></div>
                <img className='rounded-lg' src={mortgageCalculator.src} alt="home" />
            </div>
            <div className="flex gap-3 border-2  lg:col-span-2 lg:col-start-2  px-[5%] py-[4%] bg-[#f0f7f1]">
            <div className='flex flex-col gap-6'>
                <h2 className='text-[#004733] font-semibold text-2xl'>Affordability Calculator<sup>1</sup></h2>
                <p className='text-[#004733]'>Got homeownership dreams? Let's puts some numbers behind them. Our affordability calculator
                    estimates the maximum home you can afford.<sup>1</sup>
                </p>
                <div><IoIosArrowRoundForward className='font-bold size-8 border-2
                hover:bg-[#004733] hover:text-white ease-in-out duration-200 text-[#004733] rounded-full  border-gray-400'/></div>
            </div>
            <div>
                <img src={affordabilityCalculator.src} alt="" />
            </div>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 mt-8 gap-6">
            <div className="flex gap-5 border-2  lg:col-span-2 lg:col-start-1  px-[5%] py-[4%] bg-[#f0f7f1]">
                <div className=''>
                    <img className='rounded ' src={helocCalculator.src} alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-[#004733] font-semibold text-2xl'>HELOC calculator<sup>1</sup></h2>
                    <p className='text-[#004733]'>Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments
                        might be.<sup>1</sup>
                    </p>
                    <div><IoIosArrowRoundForward className='font-bold size-8 border-2 text-[#004733] rounded-full  border-gray-400
                    hover:bg-[#004733] hover:text-white ease-in-out duration-200'/></div>
                </div>
                
                </div>

                <div className="border-2 flex flex-col gap-6 py-[8%] px-[15%]  bg-[#f0f7f1] ">
                    <h2 className='text-[#004733] font-semibold text-2xl'>Fixed rate loan comparision calculator</h2>
                    <div><IoIosArrowRoundForward className='font-bold size-8 border-2 text-[#004733] rounded-full  border-gray-400
                    hover:bg-[#004733] hover:text-white ease-in-out duration-200'/></div>
                    <img className='rounded-lg' src={fixedRateCalculator.src} alt="home" />
                 </div>

                
        </div>
     </div>}


     
     {active == "Guides & FAQs" && <div>
        <div className="grid lg:grid-cols-3 gap-6">
            <div className="border-2 flex flex-col gap-6 py-[8%] px-[15%]  bg-[#f0f7f1] ">
                <h2 className='text-[#004733] font-semibold text-2xl sm:text-lg '>What is good Debt-to-income ration for home loan?</h2>
                <div><IoIosArrowRoundForward className='font-bold size-8 border-2
                hover:bg-[#004733] hover:text-white ease-in-out duration-200 text-[#004733] rounded-full  border-gray-400'/></div>
                <img className='rounded-lg' src={goodDti.src} alt="home" />
            </div>
            <div className="flex gap-3 border-2  lg:col-span-2 lg:col-start-2  px-[5%] py-[4%] bg-[#f0f7f1]">
            <div className='flex flex-col gap-6'>
                <h2 className='text-[#004733] font-semibold text-2xl'>Buying a house without realtor<sup>1</sup></h2>
                <p className='text-[#004733]'>Thinking of buying a house without real estate agent? Read this first.<sup>1</sup>
                </p>
                <div><IoIosArrowRoundForward className='font-bold size-8 border-2
                hover:bg-[#004733] hover:text-white ease-in-out duration-200 text-[#004733] rounded-full  border-gray-400'/></div>
            </div>
            <div className='size-[60%]'>
                <img src={realtor.src} alt="" />
            </div>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 mt-8 gap-6">
            <div className="flex gap-5 border-2  lg:col-span-2 lg:col-start-1  px-[5%] py-[4%] bg-[#f0f7f1]">
                <div className='size-[60%]'>
                    <img className='rounded ' src={timeline.src} alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-[#004733]  font-semibold text-2xl'>Timeline for homebuying process<sup>1</sup></h2>
                    <p className='text-[#004733]'>Does the process of buying a home seem daunting? Don't stress. We broke it down in 
                        8 easy steps.<sup>1</sup>
                    </p>
                    <div><IoIosArrowRoundForward className='font-bold size-8 border-2 text-[#004733] rounded-full  border-gray-400
                    hover:bg-[#004733] hover:text-white ease-in-out duration-200'/></div>
                </div>
                
                </div>

                <div className="border-2 flex flex-col gap-6 py-[8%] px-[15%]  bg-[#f0f7f1] ">
                    <h2 className='text-[#004733] font-semibold text-2xl'>Conventional loan requirements</h2>
                    <div><IoIosArrowRoundForward className='font-bold size-8 border-2 text-[#004733] rounded-full  border-gray-400
                    hover:bg-[#004733] hover:text-white ease-in-out duration-200'/></div>
                    <img className='rounded-lg' src={conventional.src} alt="home" />
                 </div>

                
        </div>
     </div>}
    </div>
  )
}

export default Services
