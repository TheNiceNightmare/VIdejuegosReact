import gameImg from './assets/game-core-concepts.png';
import { GAME_CONCEPTS } from './data.js';

function Header() {
  return (
    <header>
      <img src={gameImg} alt="Game controller icon" />
      <h1>Video Game Essentials</h1>
      <p>Discover some of the most iconic video games and their unique features!</p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
