import React from 'react'
import Vedio from '../component/home/Vedio'
import HomeHeroText from '../component/home/HomeHeroText'
import HomeBottomText from '../component/home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Vedio/>
      </div>
      <div className='h-screen w-screen overflow-x-hidden-hidden relative flex flex-col justify-between items-center'>
        <HomeBottomText/>
        <HomeHeroText/>
      </div>
    </div>
  )
}

export default Home
