import React , {useState} from 'react'

export default function TodoList(){
    const [tasks , setTasks]=useState([]);

    const [newTask , setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const UpdatedTask= tasks.filter((element,i)=> i!==index);
        setTasks(UpdatedTask);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div>
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>

            </div>
            <ol>
                {tasks.map((task,ind)=><li>
                    <span className="text">{task}</span>
                    <button classNaame="delete-button" onClick={()=>deleteTask(ind)}>Delete</button>
                    <button className="move-button" onClick={()=>moveTaskUp(ind)}>Up</button>
                    <button className="move-button" onClick={()=>moveTaskDown(ind)}>Down</button>
                </li>)}
            </ol>
        </div>
    );
}