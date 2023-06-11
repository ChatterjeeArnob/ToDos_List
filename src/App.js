import { useState } from "react";

import React from "react";
function App() {
  const [inputList, setInputlist] = useState('')
  const[items,setItems] = useState([])


 function inputEvent(event){
    setInputlist(event.target.value);
  }
  function button(event){ 
    setItems((item)=>{
      return[...item,inputList]
    })
  }
   function deleteItem(index) {
    setItems((item) => {
      return item.filter((item, i) => i !== index);
    })};
  return (
   <>
   <h1>Todo List</h1>
   <input type="text" onChange={inputEvent} placeholder="add a todo"/>
   <button onClick={button}>Add</button>
   <ol>
    {/* <li>{inputList}</li> */}
    {
      items.map((val,index)=>{
         return (<li>{val}
         <button onClick={()=>deleteItem(index)}>Delete</button>
         </li>
         )
      })
    }
   </ol>
   </>
  );
}

export default App;
