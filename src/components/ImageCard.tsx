import React from 'react'
import Image, { StaticImageData } from 'next/image';

const ImageCard = ({card}: {card: StaticImageData}) => {
  return (
    <div className='mb-6' >
      <Image className='h-[80vh] md:h-[65vh]  rounded-[5%]' src={card.src} alt={`${card}`} />
    </div>
  )
}

export default ImageCard
