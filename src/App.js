import React, { useEffect } from "react";
import { Link,Routes,Route } from "react-router-dom";
import Users from './Users';
import TaskCreate from "./TaskCreate";
import Tasks from './Tasks';
import TasksPending from "./TasksPending";
import TaskEdit from "./TaskEdit";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks,fetchUsers } from "./store";


const App = () => {
    const {tasks} = useSelector(state => state)
    const {users} = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTasks())
        dispatch(fetchUsers())
    },[])
    return (
        <div>
            <Link to='/'><h1>Tasks({tasks.length})</h1></Link>
            <nav>
                <Link to='/tasks/users'>Users({users.length})</Link>
                <Link to='/tasks/create'>Create a Task</Link>
                <Link to='/tasks/pending'>Pending Tasks</Link>
            </nav>
            <Routes>
                <Route path="/"  element={<Tasks/>}/>
                <Route path="/tasks/create" element={<TaskCreate/>}/>
                <Route path="/tasks/users" element={<Users/>}/>
                <Route path="/tasks/pending" element={<TasksPending/>}/>
                <Route path="/tasks/:id" element={<TaskEdit/>}/>
            </Routes>
        </div>
    )

}

export default App;