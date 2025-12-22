import React from 'react'

const design1 = () => {
  return (
    <div className='flex gap-6 '>
      <img src="https://images.unsplash.com/photo-1718963892337-b6729c302b8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[45vh] w-[110%] object-cover object-center rounded-2xl  p-2'/>
      <div  className=' text-[8px] text-[#8c8b88]  '>
        <div className='h-[20vh] w-[99%] flex p-5 gap-8 mt-[6px] bg-[#24221d] rounded-2xl mb-2'>
          <div className='flex flex-col'>
            <h1 className='text-[20px] mb-2' >INDEPENDENT DESIGNERS</h1>
            <p>Our platform celebrates the vision of independent designers, bringing forward thoughtfully crafted collections that highlight originality and artistic expression. Discover fashion that tells a story—designed by creators who value innovation, detail, and individuality.</p>
          </div>
        <div className='flex mt-[14%]'>
          <h2>EXPLORE→</h2>
        </div>
      </div>
        
        
     <div className='h-[20vh] w-[99%] flex p-5 gap-8  bg-[#24221d] rounded-2xl mb-2'>
          <div className='flex flex-col'>
            <h1 className='text-[20px] mb-2' >EXCLUSIVE & UNIQUENESS</h1>
            <p>Experience curated selections of exclusive, one-of-a-kind pieces created for those who appreciate rarity and refined style. Each design reflects a balance of sophistication and creativity, tailored for individuals who seek distinction.</p>
          </div>
        <div className='flex mt-[14%]'>
          <h2>EXPLORE→</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default design1
