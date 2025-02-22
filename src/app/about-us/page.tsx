import Navbar from '@/components/Navbar'
import React from 'react'
// import vishalImage from '../../../images/photo/vishal-mission.jpg'
import softbank from '../../../images/logo/softbank.svg'
import ally from '../../../images/logo/ally.jpg'
import citi from '../../../images/logo/citi.svg'
import goldman from '../../../images/logo/goldmanSachs.svg'
import kpcb from '../../../images/logo/kpcb.webp'
import americanExpree from '../../../images/logo/American_Express_logo_(2018).svg.png'
import Footer from '@/components/Footer'
// import { AiOutlinePlayCircle } from 'react-icons/ai'

const logos = [softbank, ally, citi, goldman, kpcb,americanExpree]
const links = {
    "softbank": "https://group.softbank/en/philosophy",
    ally: "https://www.ally.com/",
    citi: "https://www.citi.com/",
    goldman: "https://www.goldmansachs.com/",
    kpcb: "https://www.kleinerperkins.com/",
    americanExpree: "https://www.americanexpress.com/en-in/"
}


const Page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <div className='px-[80px] lg::px-[120px]'>
      <Hero/>
      <Story/>
      
      </div>
      <div>
      <Cover/>
      </div>
      <div className='px-[80px] lg:px-[120px]'>
      <Clients/>
      <CompanyTimeline/>
      </div>
     
      <Footer/> 
      
    </div>
  )
}

function Hero(){
    return (
        <div className='flex flex-col gap-4 justify-center py-[40vh] items-center'>
            <h2 className='green text-2xl font-semibold'>Our mission</h2>
            <h1 className='text-2xl md:text-5xl font-semibold w-full md:w-[70%] '>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
        </div>
    )
}

function Story(){
    return (
        <div className='flex md:flex-row flex-col justify-between pb-[10vh] gap-[10%]'>
           <div className='flex md:order-1 order-2 flex-col gap-8'>
            <h2 className="text-2xl font-semibold">The status quo is broken</h2>
                <p className='text-base'>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are 
                    simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes.
                    It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                
                <button className='button px-9 w-full lg:w-[50%] py-5 rounded-lg text-white font-semibold'>Read Vishals Story</button>
           </div>

           <div className='relaive order-1 md:order-2'>
          
<iframe width="560" height="315" src="https://www.youtube.com/embed/1KjYlLBM9j4?si=6-xvrOtAto-N4LUC" title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
           
           </div>

           <div>

           </div>
        </div>
    )
}

function Cover(){
    return (
        <div className='flex gap-4 px-[10%] py-[5%] text-white mt-[10vh] flex-col button'>
            <h2 className='text-5xl pb-[20px] font-bold'>
            How we’re changing things
            </h2>

            <p>
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account 
            for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive
             intermediaries whose interests are misaligned with consumers’.
            </p>

            <p>
            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster
             and more efficient, and humans to help make it friendly and enjoyable.
            </p>
        </div>
    )
}

function Clients(){
    return (
        <div className='py-[20vh]  flex flex-col items-center gap-9'>
            <h2 className='text-3xl font-semibold'>Backed by</h2>
            <ul className='flex flex-wrap items-center justify-center gap-4'>
                {logos.map((item, index)=> {
                      const key = Object.keys(links)[index] as keyof typeof links;
                      const link = links[key];
                    return <li key={index} className='size-[15%] md:size-[13%]'>
                        
                        <a href={link}>
                        <img className='grayscale size-[60%]' src={item.src} alt={item} />
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

function CompanyTimeline(){
    return(
        <div className='flex flex-col items-center  gap-6'>
            <Button content='2014'/>
            <div className='flex items-start ml-[20%]'>
            <ContentDiv content=
            'After Vishal Garg’s first attempt to purchase his own dream home,   he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper,             easier, and faster for all.'/>
            </div>
            <Button content='2015'/>
            <div className='flex items-center justify-center ml-[20%]'>
            <ContentDiv content=
            'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).'/>
            </div>

            <Button content='2016'/>
            <div className='flex min-w-[60%] items-start ml-[15%]'>
            <ContentDiv content=
            'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.'/>
            </div>

            <Button content='2017'/>
            <div className='flex items-center justify-center ml-[20%]'>
            <ContentDiv content=
                'Better expands into the real estate market with Better Real Estate.'/>
                </div>

            <Button content='2018'/>
            <div className='flex min-w-[60%] items-start ml-[15%]'>
            <ContentDiv content=
            'Better Mortgage partners with Ally Bank to build Ally powered by Better.'/>
            </div>


            <Button content='2019'/>
            <div className='flex items-center justify-center ml-[30%]'>
            <ContentDiv content=
            'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.'/>
            </div>
            <Button content='2021'/>
            <div className='flex  min-w-[60%] items-start ml-[15%]'>
            <ContentDiv content=
            'Better acquires Trussle — The UK’s most innovative online mortgage broker.'/>
            </div>


            <Button content='2022'/>
            <div className='flex items-center justify-center ml-[20%]'>
            <ContentDiv content=
                'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.'/>
                </div>

            <Button content='2023'/>
            <div className='flex items-start ml-[20%]'>
            <ContentDiv content=
            'Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.'/>
            </div>

            <div className='flex items-center justify-center ml-[20%]'>
            <ContentDiv content=
                'Better Mortgage launches the fully digital 3-day HELOC².'/>
                </div>

            <div className='flex min-w-[60%] items-start ml-[15%]'>
            <ContentDiv content=
            'Better Mortgage launches One Day Verified Approval Letter.'/>
            </div>


            <Button content='Today'/>
            <div className='flex flex-col gap-4 items-center justify-center ml-[20%]'>
            
                
                <div className='p-9 w-[35%] flex flex-col gap-4  bg-gray-200 text-base'>
                <p>
                Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
                </p>
                <button className='button text-white font-bold px-4 py-2 w-[80%] rounded-lg'>Get started</button>
                
                </div>
                </div>

        </div>
    )
}

function Button({content}: {content: string}){
    return (
        <button className='button font-bold text-2xl text-white rounded-lg w-[20%] lg:w-[10%] px-5 py-3'>{content}</button>
    )
}

function ContentDiv({content}: {content:string}){
    return(
        <div className='p-9 w-[35%]   bg-gray-200 text-base'>
            {content}
        </div>
    )
}

export default Page
