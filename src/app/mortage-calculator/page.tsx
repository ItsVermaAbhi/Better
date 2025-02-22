'use client'

import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import mortage from '../../../images/photo/mortgage-calculator.webp'
import Footer from '@/components/Footer'

const page = () => {

  const  [homePrice, setHomePrice] = useState("50000")
  const [monthlyPayment, setMonthlyPayment] = useState("844")
  // const [downPayment, setDownPayment] = useState("10000")
  const [rate, setRate] = useState("6.5")
  const [time, setTime] = useState("30")
  const [downPayment, setDownPayment] = useState("9000")
  const [insurance, setInsurance] = useState("132")
  const [hoa, setHoa] = useState("132")
  const [utilites, setUtilities] = useState("100")
  const [pmi, setPmi] = useState("100")

  const [total, setToatal] = useState(0)

  interface MortageProps{
    P: number;
    r: number;
    n: number;
   
  }

  const calculateMortgage = ({P, r, n}: MortageProps) => {
    r = r / 1200; 
    let M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return parseFloat(M.toFixed(2));
}

const handleChange = (event:  React.ChangeEvent<HTMLInputElement>)=> {
  setHomePrice(event.target.value)
}

const downPaymentHandle = (event : React.ChangeEvent<HTMLInputElement>)=> {
  const percent = Number(event.target.value.replace(/[^0-9]/g, ""));
  const amount = Math.floor(Number(homePrice) * (percent/100))
  setDownPayment(amount.toString())
}

useEffect(
  ()=>{
    const monthlyPay = Math.floor(calculateMortgage({P:Number(homePrice)-Number(downPayment), r:Number(rate), n:Number(time)}))
    console.log("this is : ", monthlyPay);
    setMonthlyPayment(monthlyPay.toString())
    const final = monthlyPay + Number(insurance) + Number(hoa) + Number(utilites) + Number(pmi)
    console.log("final",final);
    
    setToatal(final)
    
  }
  ,[homePrice, monthlyPayment, downPayment, rate, time, insurance, hoa, utilites, pmi])

  return (
    <div>
      <div className='fixed w-[100vw] z-30'><Navbar ></Navbar></div>
      <div className='bg-[#f0f7f1] px-[120px] pb-[50px] pt-[100px] '>
        <div className=' w-[50%] flex flex-col pb-8 '>
        <h1 className='text-4xl font-bold pb-[20px]'>Mortage Calculator</h1>
        <p>
        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI).
         Get the whole picture and calculate your total monthly payment.
        </p>
        </div>
        
        <div className='grid grid-cols-3 gap-9 items-center justify-center'>
          <div> 
            <p className='pb-2 font-semibold'>Home Price</p>
            <input className='py-3 w-[55%] pl-5 border-2 border-gray-400 text-bold text-3xl hover:border-[#004733]'
              onChange={(e) => setHomePrice( e.target.value.replace(/[^0-9]/g, ""))}
            
              
            defaultValue={`$ ${homePrice}`} type="text" />
          </div>

          <div> 
            <p className='pb-2 font-semibold'>Monthly Payment</p>
            <p className='text-bold text-3xl py-3'>{`$ ${total}/mo`}</p>
          </div>
          <div>
          <button className='bg-[#067a41] text-white rounded-lg mt-6  px-9 py-4'>Get pre-approved</button>
        </div>
        </div>

        <div className='w-[90vw] mt-9'>
          <input className='w-[90vw] bg-black'
           type="range"
           min={50000} 
           max={3000000}
           value={homePrice}
           onChange={handleChange}
           />

         
        </div>

        <div className='flex gap-[15%] justify-between mt-9'>
            <div className='flex gap-8'>
              <div className='border-2 relative border-gray-400 w-[50%]'>
                <p className='absolute top-1 text-[13px] left-9'>ZIP code</p>
                <input 
                  className='px-9 pt-6 pb-3 w-full focus:outline-none focus:border-transparent' 
                  type="text" 
                  defaultValue={226004}
                />
              </div>
              <div className='border-2 flex  relative border-gray-400 w-[50%]'>
              <p className='absolute top-1 text-[13px] left-8'>Down Payment</p>
                <input 
                  className='w-full pt-6 pl-8 pb-3 focus:outline-none focus:border-transparent w-[85%]' 
                  type="text" 
                  onChange={(e) => setDownPayment( e.target.value.replace(/[^0-9]/g, ""))} 
                  value={`$ ${downPayment}`} 
                />
                 
                 <input
                 onChange={downPaymentHandle}
                 className='text-xl bg-white w-5 border-l-2 border-gray-400 p-2 w-[25%] focus:outline-none' type="text" defaultValue={`${18} %`} />
              </div>
            </div>

            <div className='flex gap-5'>
              <div className='border-2 relative border-gray-400 w-[50%]'>
              <p className='absolute top-1 text-[13px] left-8'>Interest rate</p>
                <input 
                  className='w-full pt-6 pl-8 pb-3  focus:outline-none focus:border-transparent' 
                  type="text" 
                  onChange={e=> setRate(e.target.value.toString())}
                  defaultValue={6.5}
                />
               
              </div>
              
              <div className='border-2 relative border-gray-400 w-[50%]'>
              <p className='absolute top-1 text-[13px] left-8'>Length of loan</p>
                <input 
                  onChange={(e)=> setTime(e.target.value.toString())}
                  className='w-full pt-6 pl-8 pb-3 focus:outline-none focus:border-transparent' 
                  type="text" 
                  defaultValue={time} 
                />
              </div>
            </div>
</div>

<     div className='flex gap-5 mt-[100px]'>
        <div className='flex flex-col w-[40%] items-start gap-9'>
          <p className='font-bold text-3xl'>Monthly Payment beakdown</p>
          <p className='font-semibold text-2xl'>{`$ ${total}/mo`}</p>
          <div>
            <img className='w-[30vw]' src={mortage.src} alt="" />
          </div>
        </div>
        <div className='flex flex-col w-[60%] gap-5'>
          <div className='flex justify-between'>
            <p className='text-lg'>Principal & Interest</p>
            <p className='text-lg font-semibold'>{`$${monthlyPayment}`}</p>
          </div>

          <div className='flex relative justify-between'>
            <p className='text-lg'>Homeowners insurance</p>
            <input type="text" className='text-right' 
            onChange={(e)=>setInsurance(e.target.value)}
            defaultValue={` ${132}`} />
            <p className='text-lg absolute top-0 right-[23%]'>$</p>
          </div>

          <div className='flex relative justify-between'>
            <p className='text-lg'>HOA fees</p>
            <input type="text" className='text-right  ' 
            onChange={(e)=>setHoa(e.target.value)}
            defaultValue={` ${132}`} />
            <p className='text-lg absolute top-0 right-[23%]'>$</p>
          </div>

          <div className='flex relative justify-between'>
            <p className='text-lg'>Utilities</p>
            <input type="text" className='text-right  ' 
            onChange={(e)=>setUtilities(e.target.value)}
            defaultValue={` ${132}`} />
            <p className='text-lg absolute top-0 right-[23%]'>$</p>
          </div>

          
          <div className='flex relative justify-between'>
            <p className='text-lg'>PMI</p>
            <input type="text" className='text-right  '
            onChange={(e)=>setPmi(e.target.value)}
            defaultValue={` ${100}`} />
            <p className='text-lg absolute top-0 right-[23%]'>$</p>
          </div>

          <div>
            <button className='p-5 text-bold bg-gray-200 rounded-lg '>Copy estimate link</button>
          </div>

          
        </div>
      </div>
       
      </div>

      <Footer/>

      
    </div>
  )
}

export default page
