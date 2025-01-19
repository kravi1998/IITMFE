import DisplayToDoList from "./DisplayToDoList";
import styles from "./todolist.module.css"

export default function ToDoListItem({taskList})
{
    return(
        <div className={styles.list}>
           {taskList.map((task, index) => (
           <DisplayToDoList key={index} item={task} />     
           ))}
        </div>
    );

}