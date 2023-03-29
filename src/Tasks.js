import React from "react";
import { useSelector } from "react-redux";
import { Link,useLocation } from "react-router-dom";

const Tasks = () => {
    const {tasks,users} = useSelector(state => state);
    const location = useLocation();

    return (
        <ul>
            {
                tasks.filter(task => location.pathname === '/' || !task.isComplete).map(task => {
                    const user = users.find(user => user.id === task.userId)
                    return (
                        <li key={task.id}>
                            <Link to={`/tasks/${task.id}`} style={{textDecoration:task.isComplete? 'line-through':''}}>{task.name}({task.priority})</Link>
                            Assigned to:{user ? user.name:'nobody'}
                            {
                                !!task.image  && <img src={task.image} />
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Tasks;
