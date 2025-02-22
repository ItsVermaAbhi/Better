import React from 'react'
import { StaticImageData } from 'next/image';

const ImageCard = ({card}: {card: StaticImageData}) => {
  return (
    <div className='mb-6' >
      <img className='h-[80vh] md:h-[65vh]  rounded-[5%]' src={card.src} alt={`${card}`} />
    </div>
  )
}

export default ImageCard
