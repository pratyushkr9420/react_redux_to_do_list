import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask,updateTask } from './store';
import { useNavigate,useParams} from "react-router-dom";

const TaskEdit = () => {
    const[name,setName] = useState('');
    const[isComplete,setIsComplete] = useState(false);
    const[priority,setPriority] = useState(5);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {tasks} = useSelector(state => state);

    useEffect(() => {
        const task = tasks.find(task => task.id === id);
        if (task){
            setName(task.name)
            setIsComplete(task.isComplete)
            setPriority(task.priority)
        }
    },[tasks])

    const update = async(ev) => {
        ev.preventDefault()
        await dispatch(updateTask({name,id,isComplete,priority}))
        navigate('/');
    }

    const priorities = [];
    for(let i = 1; i <= 10; i++){
      priorities.push(i);
    }
    return (
        <form onSubmit={ update }>
            <input value={name} onChange={ev => setName(ev.target.value)}/>
            <label>
                isComplete:
                <input type='checkbox' value={isComplete} onChange={ev => setIsComplete(ev.target.checked)}/>
            </label>
            <select value={priority} onChange={ev => setPriority(ev.target.value)}>
                {
                    priorities.map(p => {
                        return (
                            <option key={p}>{p}</option>
                        )
                    })
                }
            </select>
            <button>Update</button>
        </form>
    )

}
export default TaskEdit;