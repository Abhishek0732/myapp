import React, {useState} from 'react'
import '../App.css';
const Square = ({value, onSquareClick}) => {
    // const [value,setValue]=useState(null);
    // function handleOnClick(){
    //     alert("clicked")
    //     setValue('X');
    // }
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square
