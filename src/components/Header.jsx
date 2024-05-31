const gameDescriptions = ['Iconic', 'Legendary', 'Classic'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = gameDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/game-core-concepts.png" alt="Game controller icon" />
      <h1>Video Game Essentials</h1>
      <p>
        {description} video game concepts you need to know!
      </p>
    </header>
  );
}
