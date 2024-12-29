import DisplayToDoList from "./DisplayToDoList";

export default function ToDoListItem({taskList})
{
    return(
        <div>
           {taskList.map((task, index) => (
           <DisplayToDoList key={index} item={task} />     
           ))}
        </div>
    );

}