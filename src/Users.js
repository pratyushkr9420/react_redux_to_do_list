import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
    const {users} = useSelector(state => state)
    return (
        <div>
            <ul>
                {
                    users.map(user => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users;