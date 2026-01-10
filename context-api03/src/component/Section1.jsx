import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"

const Section1 = () => {
  const data =useContext(ThemeDataContext)
  return (
    <div>
      <h1 className='text-6xl bg-fuchsia-900 font-bold absolute top-1/5 left-1/5 p-3 rounded'>Section1 Page</h1>
      <h1>{data}</h1>
      
    </div>
  )
}

export default Section1
