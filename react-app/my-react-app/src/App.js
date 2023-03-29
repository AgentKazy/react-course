import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
  // useState must be used at the top level of a component
  // useState must be used inside the scope of a component
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: 'Adventure to Mount Doom', id: 1 },
    { title: 'Escaping Moria', id: 2 },
    { title: 'Resting in Rivendell', id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
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

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10% Off Cupon Code!</h2>
        <p>Use the code KAZY10 at the checkout.</p>
      </Modal> */}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            minima, iure earum nostrum sed a, odio corrupti excepturi
            consectetur quae quibusdam! Impedit doloremque eos quibusdam dicta
            molestiae quaerat ex deserunt.
          </p>
          <a href="#">Find out more...</a>
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
