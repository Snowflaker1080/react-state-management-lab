import { useState } from 'react';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
  {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://cdn.pixabay.com/photo/2020/03/22/04/10/female-4955798_640.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://cdn.pixabay.com/photo/2024/05/12/20/50/ai-generated-8757666_640.jpg',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://cdn.pixabay.com/photo/2024/06/02/18/43/lone-8804891_640.jpg',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://cdn.pixabay.com/photo/2024/08/03/13/16/ai-generated-8942087_640.jpg',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://cdn.pixabay.com/photo/2024/08/03/13/02/ai-generated-8942065_640.jpg',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://cdn.pixabay.com/photo/2024/05/16/18/13/ai-generated-8766731_640.jpg',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://cdn.pixabay.com/photo/2024/07/14/16/51/ai-generated-8894880_640.jpg',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://cdn.pixabay.com/photo/2024/06/02/18/07/lone-8804794_640.jpg',
    },
  ]);

    const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
      setMoney(money - fighter.price);
    } else {
      console.log("Not enough money");
      alert("Not enough money!");
    }
  };

    const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  const totalStrength = team.reduce((acc, curr) => acc + curr.strength, 0);
  const totalAgility = team.reduce((acc, curr) => acc + curr.agility, 0);

   return (
    <div className="App">
      <h1>Zombie Apocalypse Team Builder</h1>
      <h2>Money: ${money}</h2>

      <h3>Available Zombie Fighters</h3>
      <ul className="fighters-list">
        {zombieFighters.map(fighter => (
          <li key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} width="100" />
            <h4>{fighter.name}</h4>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>gility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h3>Your Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="team-list">
          {team.map(fighter => (
            <li key={fighter.id} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} />
              <h4>{fighter.name}</h4>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Team Stats</h3>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </div>
  );
}

export default App;

