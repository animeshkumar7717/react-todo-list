import React from 'react'

const date  = new Date().getFullYear();
const Footer = () => {
    
  return (
    <footer>
      <p>copyright {`${date}`}</p>
    </footer>
  )
}

export default Footer
