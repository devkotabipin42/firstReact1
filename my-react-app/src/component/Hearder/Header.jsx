import reactImg from '../../assets/react-core-concepts.png'
import Card from '../Card'
import './Header.css'


const reactDescriptions = ['Fundamental','crucial','core']

function genRandomInt(max) {
  return Math.floor(Math.random()*(max + 1 ))
}

// function Card({name,children}){
//   return (
//     <article className='card'>
//       <h2>{name}</h2>
//       {children}
//     </article>
//   )
// }
export default function Header() {

  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {description} lipsum dolor sit, amet
        consectetur adipisicing elit. Quam nihil, facere adipisci quasi
        repellendus rerum velit laudantium facilis tempora, non veritatis
        inventore magnam!
      </p>
      {/* <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card> */}

    </header>
  );
}