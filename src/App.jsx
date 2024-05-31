import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { GAME_CONCEPTS } from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Games are in disorder, this is not a top.</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {GAME_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                {...concept}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
