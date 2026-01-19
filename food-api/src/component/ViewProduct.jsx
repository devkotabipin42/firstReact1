import React from 'react'
import { useContext } from 'react'
import { Productdata } from '../Context/RestroContext'
import { useParams } from "react-router-dom";

const ViewProduct = () => {

  const data = useContext(Productdata)
  const {productId}=useParams()

  let renderData='Loading'

  if (data.length>0){
    const found =data.find((elem)=>elem.id==productId)
    if (found) {
      renderData=(
       <div className="text-white bg-gray-700 h-screen w-screen absolute top-0 flex justify-center items-center">
      
      <div className="flex  sm:flex-col lg:flex-row">
        <div className="lg:h-[450px] lg:w-[450px] h-[190px] w-[150px] justify-center rounded-3xl border-2 flex  items-center ml-7  bg-gray-800  gap-5">
          <img
            className="lg:h-[450px] h-[450px] w-[100px] lg:w-[450px] p-4 object-contain "
            src={found.img}
            alt=""
          />
        </div>
        
      </div>
    </div>
      )
    }
  }
  console.log(data)
  return (
    <div className='h-screen w-full bg-amber-950'>
      {renderData}
    </div>
  )
}

export default ViewProduct
