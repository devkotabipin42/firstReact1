import React from 'react'
import Vedio from '../Component/UnderHome/vedio'
import HomeButtonText from '../Component/UnderHome/HomeButtonText'
import HomeheroText from '../Component/UnderHome/HomeheroText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
        <Vedio/>
      </div>
      <div className='h-screen w-screen overflow-x-hidden-hidden relative flex flex-col justify-between items-center'>
       <HomeheroText/>
       <HomeButtonText/>
      </div>
      </div>
  )
}

export default Home
