import React from 'react'
import Card1 from './component/Card1'

const App = () => {
 const workers = [
  {
    id: "worker1",
    name: "Ramesh Thapa",
    job: "Construction Worker",
    age: 29,
    description: "Hard-working construction professional skilled in building, loading materials, and following site safety protocols.",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg"
  },
  {
    id: "worker2",
    name: "Sita Gurung",
    job: "Nurse",
    age: 27,
    description: "Compassionate healthcare nurse experienced in patient care, emergency support, and hospital assistance.",
    image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg"
  },
  {
    id: "worker3",
    name: "Hiro Tanaka",
    job: "Factory Worker",
    age: 34,
    description: "Dedicated factory line operator working in production, packaging, and quality inspection.",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
  },
  {
    id: "worker4",
    name: "Maya Rai",
    job: "Teacher",
    age: 31,
    description: "Community-focused school teacher passionate about educating children and supporting hill-region development.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
  },
  {
    id: "worker5",
    name: "Arjun Shrestha",
    job: "Delivery Rider",
    age: 25,
    description: "Fast and reliable delivery rider handling food and parcel deliveries across the city.",
    image: "https://images.pexels.com/photos/4393667/pexels-photo-4393667.jpeg"
  }
];


  return (
    <div className=" gap-4 p-5 flex flex-wrap">
     {workers.map(worker=>(
      <Card1 key={worker.id} workers={worker}/>
     ))}
    </div>
  )
}

export default App
