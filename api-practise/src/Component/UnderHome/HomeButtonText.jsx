import React from 'react'

const HomeButtonText = () => {
  return (
     <div className='font-[font2] flex items-center gap-2'>
      <div className='text-[6.5vw] hover:text-[#D3FD50] border-5 border-white px-10 pt-3 rounded-full uppercase' to='/projects'>Projects</div>  
      <div className='text-[6.5vw] hover:text-[#D3FD50] border-5 border-white px-10 pt-3 rounded-full uppercase' to='/agence'>Agence</div>
    </div>
  )
}

export default HomeButtonText
