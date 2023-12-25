import React, { useState } from 'react'
import Header from './components/Header'
import CreateArea from './components/CreateArea'
import Note from './components/Note';
import Footer from './components/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  const handleDelete = (id) => {
    setNotes(prevNotes=>{
      return prevNotes.filter((item, index)=>{
        return index!==id
      })
    })
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
            onDelete={handleDelete}
          />
        )
      }
      )}
      <Footer />
    </div>
  )
}

export default App
