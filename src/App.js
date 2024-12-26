
import { useState } from 'react';
import './App.css';

import Square from './components/Square';
import Toolbar from './components/Toolbar';

function App() {
  const[xIsNext,setXIsNext] = useState(true);
  const [square,setSquare] = useState(Array(9).fill(null));

 function handleOnClick(i){
  if(square[i] || calculateWinner(square)) return;
  const nextSquares = square.slice();
  if(xIsNext==true)
  nextSquares[i]='X';
else nextSquares[i]='O';
  setSquare(nextSquares);
  setXIsNext(!xIsNext);
 }

 const winner = calculateWinner(square);
 let status;
 if(winner) status = "Congratus "+winner+" Won";
 else status = "Next move: "+(xIsNext? "X":"O");
  
 const person = {
  name:"Abhishek",
  style:{
    color:'white',
    backgroundColor:'red'
  }
 }

 const [message,setMessage] = useState("Hii");
 const [isSent,setIsSent] = useState(false);
 const [number,setNumber] = useState(0);

 function playCricket(){
  alert("Playing Game");
 }

 function incrementNumber(){
  setNumber(number+1);
  setNumber(number => number+1);
  setTimeout(()=>{
    alert(number);
  },3000)
  
 }
 function decrementNumber(){
  setNumber(number-1);
 }

 const [persondetail,setPersonDetail]=useState({
  firstName:"Abhishek",
  lastName:"Verma",
  email:"abhishek@gmail.com"
 })

 function handleEmailChange(e){
  setPersonDetail({...persondetail,email:e.target.value})
 }

 function handleFirstNameChange(e){
  setPersonDetail({...persondetail,firstName:e.target.value})
 }
 function handleLastNameChange(e){
  setPersonDetail({...persondetail,lastName:e.target.value});
 }

 const [listItms,setListItem] = useState( [
  {id:0,name:"Abhishek"},
  {id:1,name:"Hello"},
  {id:2,name:"Anuj"}
 ]);

 function handleDelete(id){
  setListItem(listItms.filter(a=> a.id!==id))
 }
 function handleadditems(){
  setListItem((prev)=>[...listItms,{id:3,name:"Anuj verma"}]);
 }
  return (
    <>
    
    <div className='board-row'>
      <Square value={square[0]} onSquareClick={() => handleOnClick(0)} />
      <Square value={square[1]} onSquareClick={() => handleOnClick(1)} />
      <Square value={square[2]} onSquareClick={() => handleOnClick(2)} />
    </div>
    <div className='board-row'>
    <Square  value={square[3]} onSquareClick={() => handleOnClick(3)}/>
    <Square value={square[4]} onSquareClick={() => handleOnClick(4)} />
    <Square value={square[5]}  onSquareClick={() => handleOnClick(5)}/>
    </div>  
    <div className='board-row'>
    <Square value={square[6]} onSquareClick={() => handleOnClick(6)}/>
    <Square value={square[7]} onSquareClick={() => handleOnClick(7)}/>
    <Square value={square[8]} onSquareClick={() => handleOnClick(8)}/>
    </div>  
    <br/>
    <div>{status}</div>
    <br/>
    <div style={person.style}>{person.name}</div>
    <Toolbar playCricket= {playCricket} watchMovie={()=>alert("Watch Movies")}/>
      <br/>
      {isSent? <h1>Message Sent </h1> :
      <form onSubmit={(e)=>{
        e.preventDefault();
        setIsSent(!isSent);
        // alert(message);
      }}>
        <textarea placeholder='message' value={message} onChange={(e)=>{setMessage(e.target.value);alert(message)}}></textarea>
        <button>Submit</button>
      </form> }

      <h1>{number}</h1>
      <button className='btn' onClick={decrementNumber}>-1</button>
      <button className='btn' onClick={incrementNumber}>+1</button>
      <br/>
      <label>First Name:
        <input value={persondetail.firstName} onChange={handleFirstNameChange}/>
      </label> <space/> 
      
      <label>Last Name:
        <input value={persondetail.lastName} onChange={handleLastNameChange}/>
      </label> <space/>
      <label>Email:
        <input value={persondetail.email} onChange={handleEmailChange}/>
      </label>

      <p>{persondetail.firstName}{ ' '}{persondetail.lastName}</p>


      <ul>
      {listItms.map(itm=>
        <li key={itm.id}>{itm.name}<button onClick={()=>handleDelete(itm.id)}>Delete</button></li>
      )}
      
      </ul>
      <button onClick={handleadditems}>Add</button>


    </>
  );
}

export default App;

function calculateWinner(square){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(square[a] && square[a]===square[b] && square[a]===square[c]) return square[a];

  }
  return null;
}
