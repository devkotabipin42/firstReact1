import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'


const Page1Content = () => {
  return (
    <div className='py-3 h-[90vh] bg-indigo-400 flex items-center gap-10 px-18 '>
      <RightContent/>
      <LeftContent/>
    </div>
  )
}

export default Page1Content
