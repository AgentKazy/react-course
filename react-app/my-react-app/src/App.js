import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Kazy');
  const [events, setEvents] = useState([
    { title: 'Adventure to Mount Doom', id: 1 },
    { title: 'Escaping Moria', id: 2 },
    { title: 'Resting in Rivendell', id: 3 },
  ]);

  const handleClick = () => {
    setName('Kalethyr');
    console.log(name);
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
