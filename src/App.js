import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ToDoList from './ToDoList';

function App() {
  const [item,setItem] = useState("");
  const [displayitem, setDisplayItem] = useState([]);
  function Updatelist(event){
    setItem(event.target.value)
  }

  function DeleteItem(id){
    setDisplayItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      })
    })
 }

  function onClick(){
   setDisplayItem((oldItem) => {
   return [...oldItem, item] 
   })
   setItem("");
  }
  // setDisplayItem([...displayitem, item])
  return (
    <>
    <div className='main-div'>
      <div className='center-div'>
        <br></br>
        <h1>ToDo List</h1>
        <br></br>
        <input type='text' placeholder='Add a Item'  value={item} onChange={Updatelist}></input>
        <button onClick = {onClick}>+</button>

        <ol>
          {/* <li>{displayitem}</li><br></br> */}
         { displayitem.map((itemval, index) => {
            return <ToDoList key={index} id={index} text = {itemval} onSelect={DeleteItem}/>
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
