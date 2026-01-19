import React from 'react'

const Vedio = () => {
  return (
    <div className='h-[100vh]  w-full mt-12'>
      <video autoPlay loop muted src="./src/assets/vedio1.mp4" className="h-full w-full object-cover"></video>
      <h1 className="absolute mt-12 inset-0 bg-black opacity-70 pointer-events-none"></h1>
    </div>
  )
}

export default Vedio
