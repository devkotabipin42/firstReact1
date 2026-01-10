import React from 'react'
import { Link } from 'react-router-dom'

const AllSection = () => {
  return (
    <div>
      <h1 className='text-6xl bg-fuchsia-900 font-bold absolute top-1/5 left-1/5 p-3 rounded'>Allsection Page</h1>
      <div className='flex items-center justify-between mt-52'>
      <Link className='text-3xl bg-amber-950 p-3 rounded-2xl active:scale-95 active:bg-fuchsia-900'  to='/section/section1'>Section1</Link>
      <Link className='text-3xl bg-amber-950 p-3 rounded-2xl active:scale-95 active:bg-fuchsia-900' to='/section/section2'>Section2</Link>
      </div>
    </div>
  )
}

export default AllSection
