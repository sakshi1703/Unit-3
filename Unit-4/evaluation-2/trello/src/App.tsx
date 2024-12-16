import React, { useState } from 'react'

import './App.css'

interface Board{
  id: number;
  name: string;
  date: string;
}

const App: React.FC=()=>{

  const [name, setName] = useState<string>("");
  const[Board, setBoard] = useState<Board[]>([]);

  const CreateBoard=()=>{
    if(!name){
      alert("Please Enter the Name");
      return;
    }
    const newBoard: Board ={
      id: Date.now(),
      name: name,
      date: new Date().toLocaleString(),
    }
    setBoard([...Board, newBoard]);
    setName("")
  }

  const deleteBoard =(id: number)=>{
    setBoard(Board.filter(
      (board)=>board.id !=id))
  }

  return(
    <>
    <div>
      <h1>Task Management with Trello</h1>
    </div>
    <div>
      <input placeholder='BoardName' type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={CreateBoard}>Create Board</button>
      {/* <button onClick={deleteBoard}>Delete board</button> */}
    </div>
    <div>
      {
      Board.map((ele)=>(
        <div key={ele.id}>
          <h4>{ele.name}</h4>
          <p>Date: {ele.date}</p>
          <button onClick={()=>deleteBoard(ele.id)}>Delete Board</button>
        </div>
      ))
      }
    </div>
    </>
  )

}

export default App
