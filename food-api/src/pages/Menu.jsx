import React from 'react'
import { useContext } from 'react'
import { Productdata } from '../Context/RestroContext'
import { Link } from 'react-router-dom'

const Menu = () => {
  const data =useContext(Productdata)

  let renderData = 'Loading'

  if (data.length>0){
    renderData=data.map(function(elem,idx){
      return  <Link key={idx} to={`/menu/${elem.id}`}>
         <div className='lg:h-[300px] lg:w-[300px] h-[190px] w-[150px]  border-2 flex flex-col items-center bg-gray-800  gap-5' >
          <img className='lg:h-[200px] h-[100px] w-[100px] lg:w-[200px] object-contain rounded-3xl mt-3' src={elem.img} alt="" />
         <p className='h-fit w-fit bg-gray-500 rounded-2xl text-[10px] hover:bg-gray-600 lg:text-2xl p-2'>View Product</p>
        </div>
      </Link>
    })
  }

  return (
    <div className='h-screen absolute top-0 w-screen bg-black text-amber-50 flex flex-wrap gap-3  justify-center '>
      {renderData}
    </div>
  )
}

export default Menu
