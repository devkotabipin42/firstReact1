import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div className="relative bg-[#422142] h-[90vh] w-screen overflow-x-hidden">
      {/* Section content */}
      <div className=" text-white text-3xl">
       
      </div>

      {/* SVG Curve Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden  leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] bg-[#422142] lg:h-[291px]"
        >
          <path
           d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"
            fill="#546c70"
          />
        </svg>
      </div>
    </div>
  )
}

export default Home
