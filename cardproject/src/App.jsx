import React from 'react'

const App = () => {
  return (
    <div className='bg-black h-[100vh] text-white flex'>
      <div className='h-full w-1/2 bg-gray-700 p-7 '>
       <div className='bg-[url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[80%] w-[60%] rounded-4xl bg-cover bg-center'>
        <div className='h-[30%] w-full p-3 text-black flex flex-col items-center '>
            <h3 className='text-[18px] text-blue-800'>Component Cheat Sheet</h3>
            <h1 className='type text-4xl text-emerald-600'>Types of Inputs</h1>
        </div>
       </div>
      </div>
      <div className='bg-amber-600 w-1/2'>ffffffffffff</div>
    </div>
  )
}

export default App
