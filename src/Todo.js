import React from 'react'
import database from "./firebase";


function Todo(props) {
    function deleteHandler(event) {
        event.preventDefault()
        database.collection("todos").doc(props.todo.id).delete()
    }
    return (
        <div>
            <li>{props.todo.todo}</li>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo;
