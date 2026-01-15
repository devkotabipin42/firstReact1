import React, { useContext } from 'react'
import {  dataContext } from '../Context/CardContext';
import { Link } from 'react-router-dom';


const Shein = () => {
  const productData =useContext(dataContext)
  
  let renderData = 'Loading...'
   if (productData.length>0){
    renderData=productData.map(function(elem,idx){
        return   <Link key={idx} to={`/shein/${elem.id}`}  href="" >
        <div className='lg:h-[300px] lg:w-[300px] h-[190px] w-[150px]  border-2 flex flex-col items-center bg-gray-800  gap-5' >
          <img className='lg:h-[200px] h-[100px] w-[100px] lg:w-[200px] object-contain ' src={elem.image} alt="" />
         <p className='h-fit w-fit bg-gray-500 rounded-2xl text-[10px] hover:bg-gray-600 lg:text-2xl p-2'>View Product</p>
        </div>
      </Link>
      })
   }

  return (
    <div className='min-h-screen  w-[100%] cursor-pointer  bg-black text-amber-50 flex flex-wrap gap-3  justify-center '>
      
      {renderData}
    </div>
  )
}

export default Shein
