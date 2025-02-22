import React from 'react'

const BorderedButton = ({content,active, onClick}: {content: string,active: string, onClick: ()=> void}) => {
  return (
    <button onClick={onClick}
     className={` rounded-full px-6 py-3  ${active.toLocaleLowerCase() === content.toLocaleLowerCase()? "border-4 text-[#004733] border-[#004733]":"border-2 text-black border-gray-400"}`}>
      {content}
      
    
    </button>
  )
}

export default BorderedButton
