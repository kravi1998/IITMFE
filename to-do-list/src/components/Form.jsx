import { useState } from "react";
import styles from "./form.module.css";
export default function Form({taskList,setTaskList}){
    const [taskName , setTaskName] = useState("");
        function handleChange(e)
         {
           setTaskName(e.target.value);
         }
         function handleSubmit(e){
            e.preventDefault();
            console.log(taskName)
            setTaskList([...taskList , taskName])
            setTaskName("")
         }
    return(
        <form className={styles.todoform}>
                    <input name="taskName" type="text" onChange={handleChange} value={taskName}></input>
                    <button type="submit" onClick={(e)=>{
                        handleSubmit(e);
                    }}>Submit</button>
                </form>
    );
}