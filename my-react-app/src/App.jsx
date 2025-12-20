// import React from 'react'

// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'
import Header from './component/Hearder/Header.jsx'
import CoreConcept from './component/CoreConcepts.jsx';
import TabButton from './component/TabButton.jsx';
// import Card from './component/Card.jsx';


function App(){
  function handleSelect(){
    console.log('hello world selected');
    
  }
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept
            
             {...CORE_CONCEPTS[1]}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}
            // title = {CORE_CONCEPTS[3].title}
            // description= {CORE_CONCEPTS[3].description}
            // img = {CORE_CONCEPTS[3].image}
            />
            <CoreConcept {...CORE_CONCEPTS[3]}

           
            />
            
          </ul>
        </section>
        <section id='examples'>
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton onSelect = {handleSelect}>Component</TabButton>
            <TabButton onSelect = {handleSelect}>Jsx</TabButton>
            <TabButton onSelect = {handleSelect}>Props</TabButton>
            <TabButton onSelect = {handleSelect}>State</TabButton>
          </menu>
          Dynamic Component
        </section>
      </main>
    </div>
  )
}




export default App;
