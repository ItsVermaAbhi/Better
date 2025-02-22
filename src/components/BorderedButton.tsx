import React from 'react'

const BorderedButton = ({content,active, onClick}: {content: string,active: string, onClick: ()=> void}) => {
  return (
    <button onClick={onClick}
     className={` rounded-full px-3 py-2 text-sm  md:px-6 md:py-3   ${active.toLocaleLowerCase() === content.toLocaleLowerCase()? "border-2 md:border-4 text-[#004733] border-[#004733]":"border-2 text-black border-gray-400"}`}>
      {content}
      
    
    </button>
  )
}

export default BorderedButton
