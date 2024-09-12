import axios from 'axios'
import React, { useReducer, useState } from 'react'

function Put() {

    const [id , setId] = useState("")
    const [title , setTitle] = useState("")

    const sendHandler = () => {
        // axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {title})
        // .then(res => console.log(res))
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {title})
        .then(res => console.log(res))
    }


  return (
    <div>
       <input type="text" placeholder='id' onChange={e => setId(e.target.value)} value={id} /> 
       <input type="text" placeholder='title' onChange={e => setTitle(e.target.value)} value={title} /> 
       <button onClick={sendHandler} >send data</button>
    </div>
  )
}

export default Put