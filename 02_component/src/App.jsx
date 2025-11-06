// import React from 'react'
// import Card from './component/Card'
// const App = () => {
//   return (
//     <div>
//       <div className="Card">
//         <h1>Bipin devkota</h1>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, nostrum.</p>
//       </div>
//       {Card()}
//       <Apple/>
//     </div>
//   )
// }

// export default App

import Apple from "./component/Apple";
import Card from "./component/Card";

function App() {
  return (
    <div>
      <Apple/>
      <Apple/>
      <Card/>
    </div>
  )
}
export default App