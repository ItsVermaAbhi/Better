
import React from 'react'
import { MdCall } from "react-icons/md";
import {Rajdhani} from "next/font/google"

const rajdhani = Rajdhani({
  weight: "700"
})
const BuyCardItems = ["Apply Now", "Purchase Rates", "Affordability Calculator", "Mortage Calculator", "Rent Vs Buy Calculator", "Find An Agent", "VA Loans", "Learning Center"]
const RefinanceItems = ["Apply Now", "Refinance Rates", "Cast-out Refinance Calculator", "Learning Center"]
const HelocItems = ["Apply Now", "Calculate Your Cash", "HELOC vs Cash-out Refinance", "Leaning Center"]
const RatesItems = ["Purchase Mortage Rates", "Refinance Rates", "Refinance Cash-Out Rates", "HELOC Rates", "Purchase VA Rates"]
const BetterItems = ["Get Insurance", "Title And Closing", "Better Attorney Match", "Learning Center", "Better Agent Match", "Better Duo"]

function CardDesign(items: String[]){
  return (
    <div className='border-2 py-3 px-5 w-[20vw] rounded text-black bg-white'>
      {items.map((item, index)=>{
        return (
          <div key={index} className='p-2'>
            <div>{item}</div>
          </div>
        )
      })}
    </div>
  )
}

const BuyCard = ()=> CardDesign(BuyCardItems)
const RefinanceCard = ()=> CardDesign(RefinanceItems)
const HelocCard = ()=>CardDesign(HelocItems)
const RatesCard = ()=>CardDesign(RatesItems)
const BetterCard = ()=>CardDesign(BetterItems)


const navItems = ["Better", "Buy", "Refinance", "HELOC", "Rates", "Better+"]

const hoverCards:{ [key: string]: React.FC } = {
  Buy: BuyCard,
  Refinance: RefinanceCard,
  HELOC: HelocCard,
  Rates: RatesCard,
  BuyCard: BuyCard,
  "Better+" : BetterCard
 
  
}



const Navbar = () => {
  return (
    <div className='flex justify-between pt-5 px-9 pb-3 bg-[#004733]'>
      <div >
        <ul className='flex gap-10 justify-between'>
          {navItems.map((item,index)=> {
            const HoverComponent = hoverCards[item]
           
            return(
              <div key={item} className={`relative group py-2 hover:text-black  ${item == "Better"? `${rajdhani.className}`: "hover:text-black hover:bg-white hover:px-4 px-4 ease-in-out duration-200 hover:px-4   rounded-full"}`}>
                 <li key={item}  className={`text-white hover:text-black ${item=="Better"? "text-bold": "text-md hover:text-black "} `}>{item}</li>
                
                 {HoverComponent && (
                  <div className='absolute z-20 duration-200 ease-in-out left-[-5px] top-full mt-1 hidden group-hover:block '>
                    <HoverComponent />
                  </div>) }
              </div>
            )
          })}
        </ul>
        
      </div>
      <div className=' relative flex gap-4'>
        <div className="relative group">
        <button className='text-white  border border-1 border-whiter rounded-full hover:bg-white hover:text-black ease-in-out duration-200 p-3'><MdCall /></button>

        <div className='absolute top-[50px] right-[20%] w-[45vh] bg-white text-black py-6 px-8 rounded  group-hover:block hidden'>Call us at any time at <span className='underline'>415-523-8837</span></div>
        </div>
      
        <button className='hover:bg-white text-white hover:text-black hover:py-2 hover:px-4 rounded-full  px-4 ease-in-out duration-200'>Sign in</button>
        <button className='bg-[#1ee07f] text-black px-4 hover:bg-[#004733] hover:text-white rounded-full ease-in-out duration-200'>Continue</button>
      </div>
    </div>
  )
}



export default Navbar



/*

import React from 'react'
import { MdCall } from "react-icons/md";

const One = () => {
  return <div className="p-2 bg-gray-200 border">One</div>
}

const Two = () => {
  return <div className="p-2 bg-gray-200 border">Two</div>
}

const navItems = ["Better", "Buy", "Refinance", "HELOC", "Rates", "Better+"]
const hoverComponents: { [key: string]: React.FC }  = {
  "Buy": One,
  "HELOC": Two
}

const Navbar = () => {
  return (
    <div className='flex justify-between w-full p-4 '>
      <div>
        <ul className='flex gap-4 justify-between'>
          {navItems.map((item) => {
            const HoverComponent: React.FC = hoverComponents[item]; 
            return (
              <div key={item} className="relative group">
                <li className={`${item === "Better" ? "font-bold" : "text-md"} cursor-pointer`}>
                  {item}
                </li>
             
                {HoverComponent && (
                  <div className='absolute left-0 top-full hidden group-hover:block'>
                    <HoverComponent />
                  </div>
                )}
              </div>
            )
          })}
        </ul>
      </div>
      <div>
        <button className='text-white border border-1 border-white rounded-full p-2 bg-blue-500'>
          <MdCall />
        </button>
      </div>
    </div>
  )
}

export default Navbar;

*/

