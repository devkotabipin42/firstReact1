import React from 'react'

const Card = (props)=> {
 console.log(props.user,props.age)
  return (
    <div className="card">
            <img src={props.img} alt="" />
            <h2>Hello i am {props.user}</h2>
            <h5>I am {props.age} years old</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt earum vero dolor.</p>
            <button>Click Me</button>
          </div>
  )
}

export default Card
