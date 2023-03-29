import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Tasks = () => {
    const {tasks} = useSelector(state => state);
    return (
        <ul>
            {
                tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <Link to={`/tasks/${task.id}`} style={{textDecoration:task.isComplete? 'line-through':''}}>{task.name}({task.priority})</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Tasks;
