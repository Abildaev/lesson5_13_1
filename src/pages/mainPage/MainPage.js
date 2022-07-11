import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import usersReducer, {getUsers} from "../../store/usersSlice";

function MainPage() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)


    return (
        <div>
            <button onClick={() => dispatch(getUsers())}>get users</button>

            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default MainPage;