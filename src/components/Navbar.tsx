
import React from 'react'
import { MdCall } from "react-icons/md";



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
    <div className='flex justify-between pt-5 px-9 pb-3 overflow-x-hidden bg-[#004733] '>
      <div >
        <ul className='sm:flex lg:gap-10 md:gap-3 gap-0 justify-between'>
          {navItems.map((item,index)=> {
            const HoverComponent = hoverCards[item]
           
            return(
              <div key={item} className={`relative group py-2 hover:text-black  ${item == "Better"? ``: "sm:hover:text-black sm:hover:bg-white sm:hover:px-4 sm:px-4 sm:ease-in-out sm:duration-200 sm:hover:px-4 hidden sm:block  sm:rounded-full"}`}>
                 <li key={item}  className={`text-white hover:text-black ${item=="Better"? "text-bold": "text-md hover:text-black sm:text-sm "} `}>{item}</li>
                
                 {HoverComponent && (
                  <div className='absolute z-20 duration-200 ease-in-out left-[-5px] top-full mt-1 hidden group-hover:block '>
                    <HoverComponent />
                  </div>) }
              </div>
            )
          })}
        </ul>
        
      </div>
      <div className=' relative flex gap-4 sm:gap-2'>
        <div className="relative group">
        <button className='text-white  border border-1 border-whiter rounded-full hover:bg-white hover:text-black ease-in-out duration-200 p-3 sm:p-2 '><MdCall /></button>

        <div className='absolute top-[50px] right-[20%] w-[45vh] bg-white text-black py-6 px-8 rounded  group-hover:block hidden'>Call us at any time at <span className='underline'>415-523-8837</span></div>
        </div>
      
        <button className='hover:bg-white text-white hover:text-black hover:py-2 sm:hover:py-2 hover:px-4 rounded-full  px-4 ease-in-out duration-200 sm:px-1 sm:text-sm sm:hover:px-1'>Sign in</button>
        <button className='bg-[#1ee07f] text-black px-4 hover:bg-[#004733] sm:px-1 sm:text-sm sm:py-1 hover:text-white rounded-full ease-in-out duration-200'>Continue</button>
      </div>
    </div>
  )
}



export default Navbar

