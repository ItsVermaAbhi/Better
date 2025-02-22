import React from 'react'
import {Rajdhani} from "next/font/google"

const rajdhani = Rajdhani({
  weight: "700"
})

const resources = ["Home affordability calculator", "Mortgage calculator", "Free mortgage calculator", "Mortgage calculator with taxes"
    ,"Mortgage calculator with PMI", "Rent vs buy calculator","HELOC payment calculator","HELOC vs cash-out refinance calculator",
    "Buy a home", "Sell a home","Get home inspection"
]

const company = ["About Us", "Careers", "Media", "Partner With Us", "Learning center", "FAQs", "Learning center"]
const contact = ["hello@better.com", "415-523-8837", "FAQ", "415-523-8837", "Legal", "NMLS Consumer Access", "Privacy Policy","Terms of Use", "Disclosures & Licensing"
    , "Affiliated Business","Browser Disclaimer"
]

const Footer = () => {
  return (
    <>
    <hr></hr>
    <div className='grid md:grid-cols-4 gap-9 pb-[150px] mt-[100px] px-[50px] md:px-[120px] '>
       
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
                <h2 className={`text-[#004733] text-3xl ${rajdhani.className}`}>Better</h2>
                <p className='text-sm'>Better is a family of companies serving all your homeownership needs.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className={`text-[#004733] text-2xl ${rajdhani.className}`}>Better <span className='text-gray-400'>Mortage</span></h2>
                <p className='text-sm'>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className={`text-[#004733] text-2xl ${rajdhani.className}`}>Better <span className='text-gray-400'>Real Estate</span></h2>
                <p className='text-sm'>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className={`text-[#004733] text-2xl ${rajdhani.className}`}>Better <span className='text-gray-400'>Cover</span></h2>
                <p className='text-sm'>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className={`text-[#004733] text-2xl ${rajdhani.className}`}>Better <span className='text-gray-400'>Inspect</span></h2>
                <p className='text-sm'>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className={`text-[#004733] text-2xl ${rajdhani.className}`}>Better <span className='text-gray-400'>Settlement Services</span></h2>
                <p className='text-sm'>Get transparent rates when you shop for title insurance all in one convenient place. </p>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-xl'>Resources</h3>
            <ul className='flex flex-col gap-7'>
                {resources.map((item,index)=>{
                    return <li className='text-base' key={index}>{item}</li>
                })}
            </ul>
            
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-xl'>Company</h3>
            <ul className='flex flex-col gap-7'>
                {company.map((item,index)=>{
                    return <a key={index} href={`${item == "About Us"?"/about-us": ""}`}>
                        <li className='text-base' >{item}</li>
                    </a>
                })}
            </ul>
            
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-xl'>Contact Us</h3>
            <ul className='flex flex-col gap-7'>
                {contact.map((item,index)=>{
                    return <li className={`text-base ${item == "Legal"?"font-bold" :""}`} key={index}>{item}</li>
                })}
            </ul>
            
        </div>
      
    </div>
    </>
  )
}

export default Footer
