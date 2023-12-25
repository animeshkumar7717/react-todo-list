import React, { useState } from 'react'
import Header from './components/Header'
import CreateArea from './components/CreateArea'

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNote=>{
      return [...prevNote, newNote]
    })
    console.log('newNote', notes);
  }

  return (
    <div className='app'> 
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  )
}

export default App
