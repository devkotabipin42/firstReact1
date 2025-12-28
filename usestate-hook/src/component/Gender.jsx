import React, { useState } from 'react'
import Washroom from './Washroom'

const Gender = () => {
    const [gender, setGender] = useState('ok')

    function changeGender(){
        if (gender =='Male'){
            setGender('female')
        }else if(gender =='Female'){
            setGender('Other')
        }else{
            setGender('Male')
        }
    }
  return (
    <div>
      <h1 className='text-4xl text-white m-7 bg-amber-950 px-2 py-3 rounded' >your gender is {gender}</h1>
      <button onClick={changeGender} className='text-4xl m-7 px-4 py-4  rounded bg-amber-400 active:scale-95'>change Gender</button>

      <Washroom user={gender}/>
    </div>
  )
}

export default Gender
