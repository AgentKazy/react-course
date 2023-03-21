import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';

function App() {
  // useState must be used at the top level of a component
  // useState must be used inside the scope of a component
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: 'Adventure to Mount Doom', id: 1 },
    { title: 'Escaping Moria', id: 2 },
    { title: 'Resting in Rivendell', id: 3 },
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const subtitle = 'All the latest adventures in Middle Earth';

  return (
    <div className="App">
      <Title title="Events in The Lonely Mountain" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </React.Fragment>
        ))}
    </div>
  );
}

export default App;
