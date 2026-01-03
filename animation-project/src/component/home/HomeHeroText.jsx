import React from 'react'
import Vedio from './Vedio'

const HomeHeroText = () => {
  return (
    <div className='font-[font2] text-center pt-2 '>
      <div className='text-[9vw] uppercase leading-[9vw] '>The spark</div>
      <div className='text-[9vw] uppercase leading-[9vw] flex items-center justify-center rounded-3xl'>who <div className='h-[8vw] w-[18vw]  rounded-4xl overflow-hidden'><Vedio/></div></div>
      <div className='text-[9vw] uppercase leading-[9vw]'> generates</div>
      <div className='text-[9vw] uppercase leading-[9vw]'>there</div>
      <div className='text-[9vw] uppercase leading-[9vw]'>creativity</div>
    </div>
  )
}

export default HomeHeroText
