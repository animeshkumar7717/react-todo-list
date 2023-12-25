import React, { useState } from 'react'
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
          })
    }

    const functionSubmit = (event) => {
      props.onAdd(note);
      setNote({
        title: '',
        content: ''
      })

      event.preventDefault();
    }

  return (
    <div>
      <form action="" className="create-note">
        <input 
            type="text" 
            name='title' 
            placeholder='title' 
            value={note.title}
            onChange={handleChange}
        />
        <textarea 
            name='content' 
            rows='3' 
            placeholder='take a note...' 
            value={note.content}
            onChange={handleChange}
        />
        <Fab onClick={functionSubmit}>
            <AddIcon />
        </Fab>
      </form>
    </div>
  )
}

export default CreateArea
