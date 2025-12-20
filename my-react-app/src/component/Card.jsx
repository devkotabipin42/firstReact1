

export default  function Card({name,children}){
 return(
  <article  className='card'>
    <h2>{name}</h2>
    {children}
  </article>
 )
}
// export default function(Card){
//  return(
//   <div>
//    <h1>hello world</h1>
//    <Card name="Anthony Blake">
//         <p>
//           Blake is a professor of Computer Science at the University of
//           Illinois.
//         </p>
//         <p>
//           <a href="mailto:blake@example.com">Email Anthony</a>
//         </p>
//       </Card>

//       <Card name="Maria Miles">
//         <p>
//           Maria is a professor of Computer Science at the University of
//           Illinois.
//         </p>
//         <p>
//           <a href="mailto:blake@example.com">Email Maria</a>
//         </p>
//       </Card>
//   </div>
//  )
// }