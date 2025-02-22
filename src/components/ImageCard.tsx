import React from 'react'

const ImageCard = ({card}: {card: any}) => {
  return (
    <div className='mb-6' >
      <img className='h-[80vh] md:h-[65vh]  rounded-[5%]' src={card.src} alt={`${card}`} />
    </div>
  )
}

export default ImageCard
