import React from 'react'
import Button from './Button'

const Toolbar = ({playCricket,watchMovie}) => {
    
  return (
    <>
    hello hi
   <Button onClick={playCricket}>Play Cricket</Button>
   <Button onClick={watchMovie}>Watch Movie</Button>
    
    </>
  )
}

export default Toolbar
