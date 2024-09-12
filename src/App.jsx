import { useEffect, useState } from "react"

import axios from "axios"
import Post from "./components/Post";
import Delete from "./components/Delete";
import Put from "./components/put";

function App() {

    const [todos , setTodos] = useState([]);

    useEffect(( )=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => console.log(res.data));

        // axios.all([
        //     axios.get("https://jsonplaceholder.typicode.com/todos"),
        //     axios.get("https://jsonplaceholder.typicode.com/posts"),
        //     axios.get("https://jsonplaceholder.typicode.com/users"),
        // ])
        // .then(axios.spread((todos , posts , users)=> {
        //     console.log(todos)
        //     console.log(posts)
        //     console.log(users)
        // }))
    },[])

  return (
    <>
    {/* <Post/>
    <Delete/> */}
    {/* <ui>
        {todos.map(todo => <li key={todo.id} > {todo.title} </li> )}
    </ui> */}
    <Put/>
    </>
  )
}

export default App
