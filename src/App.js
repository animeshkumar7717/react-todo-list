import React, { useState } from 'react'
import Header from './components/Header'
import CreateArea from './components/CreateArea'
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);

  ;
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className='app'> 
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index)=>{
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
          />
        )
      }
      )}
    </div>
  )
}

export default App
