 export default function CoreConcept({img,title,description}){
  return ( <li>
    <img src={img} alt={title}/>
    <h1>{title}</h1>
    <p>{description}</p>
  </li>
  )
}