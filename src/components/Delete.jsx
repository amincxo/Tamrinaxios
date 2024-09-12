import axios from 'axios'
import React, { useState } from 'react'

function Delete() {

    const [id , setId] = useState('')

    const deleteHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => console.log(res))
    }

  return (
    <>
        <input type="text" placeholder='id' value={id} onChange={e=> setId(e.target.value)} />
        <button onClick={deleteHandler} >Delete id</button>
    </>
  )
}

export default Delete