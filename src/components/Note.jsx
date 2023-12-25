import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const Note = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteIcon />
    </div>
  )
}

export default Note
