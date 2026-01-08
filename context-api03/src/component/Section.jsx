import React from 'react'
import { Outlet } from 'react-router-dom'

const Section = () => {
  return (
    <div>
    <div className="bg-red-900 flex text-3xl gap-[20px] flex-nowrap  ">
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
        <p className="shrink-0">sale is live!!! </p>
      </div>
     
      <Outlet/>
    </div>
  )
}

export default Section
