import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  console.log(showModal);

const handleClick = (id) => {
  setEvents((prevEvents) => { 
    return prevEvents.filter((event) => {
    return id !== event.id
  })
})
  console.log(id)
}

const handleClose = () => {
  setShowModal(false)
}
const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">

      <Title title="Events in Your Area" subtitle={subtitle}/>
      {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      )}
      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      )}
       {showEvents && <EventList events={events} handleClick={handleClick} />}

          {showModal && <Modal handleClose={handleClose}>
            <h2>Terms and Conditions</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Modal>}
          <div>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
          </div>
    </div>
  );
}

export default App;
