import { useState } from "react";
import Form from "./Form";
import "../css/Style.css"
import ToDoListItem from "./ToDoListItem";

export default function ToDoList(){
    const [taskList , setTaskList] = useState([]);
    return(
     <div>
      <h1 style={{color:"blue"}}>To Do List</h1>
      
        <div>
            <Form taskList={taskList} setTaskList={setTaskList}/>
            <ToDoListItem key={taskList} taskList={taskList} />
        </div>
     </div>
    );
}