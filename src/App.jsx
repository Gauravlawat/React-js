import reactImg from './assets/react-core-concepts.png';
// import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
const reactDescriptions = ['Fundamental', 'Core', 'Crucial'];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept({image,title,description}) {
  return (
    <li>
      {/* <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p> */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

//task 1

// import React from 'react'; 

// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// export function MainGoal() {
//     return (<p>My main goal: Learn React in-depth and from the ground up</p>);
// }

// // DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// // Except for outputting your custom component

// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice!</h1>
//       <p>
//         Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
//         text.
//       </p>
//       <p>
//         Your <code>&lt;MainGoal&gt;</code> component should simply output some
//         text that describes your main course goal (e.g., &quot;My main goal:
//         Learn React in great detail&quot;).
//       </p>
//       <p>
//         <strong>Important:</strong> You custom component must contain the text
//         &quot;My main goal:&quot;
//       </p>
//       <p>
//         <strong>Also important:</strong> For the automatic checks to succeed,
//         you <strong>must export</strong> your custom component function! Not as
//         a default but simply by adding the <code>export</code> keyword in front
//         of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
//         ).
//       </p>
//       {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
//       {/* OUTPUT YOUR COMPONENT HERE */}
//       <MainGoal />
//     </div>
//   );
// }

// export default App;
