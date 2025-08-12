import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";           
import { useDispatch, useSelector } from "react-redux";
import { addList, deleteList } from "./Store";



const TodiList = () => {
  const[Task,setTask]=useState("")
  const task = useSelector((state)=>state.task)

  const dispatch = useDispatch();
   const handSubmit = (e)=>{
    e.preventDefault();
      dispatch(addList(Task))
       return setTask("")
   }
    const handleDelete=(id)=>{
      return dispatch(deleteList(id))
    } 
  
return (
  <>
    <div className="container">
      <h1> Todo List</h1>
      <div className="input-area">
        <form onSubmit={handSubmit}>
          
        <input
          type="text"
          placeholder="Enter a task..."
          value={Task}
          onChange={(e)=>setTask(e.target.value)}

          
        />
        
        <button onSubmit={handSubmit}>Add</button>
        </form>
      </div>
      <ul className="todo-list">
       { task.map((cur,index)=>{
          return(
            <li key ={index} >
              <p>
                {index}:{cur}
          </p>
          <div>
             <MdDeleteForever 
              onClick={()=>handleDelete(index)}/> 
          </div>
          </li>
              
          );
        })}
        
      </ul>
      
    </div>
    </>
  );
}


export default TodiList
