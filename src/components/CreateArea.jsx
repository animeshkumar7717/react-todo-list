import React, { useState } from 'react'

const CreateArea = () => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const handleChange = (event) => {
        console.log('event', event.target);
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                prevNote,
                [name]: value
            }
        })
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
            name='Content' 
            rows='3' 
            placeholder='take a note...' 
            value={note.content}
            onChange={handleChange}
        />
      </form>


    </div>
  )
}

export default CreateArea
