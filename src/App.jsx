// import { useState, Fragment } from 'react';
import Header from './components//Header/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
import CoreConcepts from './components/Coreconcepts.jsx';
import Examples from './components/Examples.jsx';
// import TapButton from './components/tapButton.jsx';
// import { EXAMPLES } from './data-with-examples.js';


function App() {
  
  return (
    <>  //Fragment can be used 
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
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
