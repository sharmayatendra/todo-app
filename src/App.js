import React, { useEffect, useState } from "react";
import './App.css';
import Todo from "./Todo";
import firebase from 'firebase/compat/app';
import database from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    database.collection("todos").orderBy('timestamp', 'desc').onSnapshot(snapshot => {{
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    }})
  },[])

  function inputChangeHandler(event) {
    setInput(event.target.value)
  }

  function clickHandler(event) {
    event.preventDefault()
    // setTodos([...todos, input])
    database.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
    
  }

  return (
    <div className="App">
    <h1>my name is yatendra!</h1>
    <form>
    <input type="text" onChange={inputChangeHandler} value={input} placeholder="write todo" />
      <button type="submit" onClick={clickHandler} disabled={!input}>Add</button>
      <ul>
        {todos.map(todo => ( 
        <Todo todo = {todo}/>
        ) 
        )}
      </ul> 

    </form>
     
    </div>
  );
}

export default App;
