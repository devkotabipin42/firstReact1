import React from 'react'

const Cards = (props) => {
  return (
     <div
              
              className="w-[23vw] lg: rounded-3xl p-3.5 h-[350px] gap-3 bg-gray-700 text-white flex flex-col items-center text-center"
            >
              <img
                src={props.elem.iImageUrl}
                alt=""
                className="h-[120px] w-[120px] rounded-full mt-5 object-cover object-center"
              />
              <h1 className="text-4xl text-emerald-700 font-bold mt-3">
                {props.elem.uUserName}
              </h1>
              <h5 className="text-base text-blue-300 font-semibold ">
                {props.elem.qQualify}
              </h5>
              <p className="text-amber-700 font-semibold leading-tight">
                {props.elem.oOthers}
              </p>
              <button　onClick={()=>{
                props.deleteHandler(props.idx)
              }}
               className="rounded py-2 px-4 bg-red-600 cursor-pointer active:scale-95 mt-">
                Remove
              </button>
            </div>
  )
}

export default Cards
