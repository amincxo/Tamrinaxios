import axios from 'axios';
import React, { useState } from 'react'

function Post() {

    const [title, setTitle] = useState('');
    const [javab , setJavb] = useState({});
    const [sended , setSended] = useState(false)

    const postHandler = async ()=>{
         const reponce = await axios.post("https://jsonplaceholder.typicode.com/posts", {title})
        
         if (reponce.status == 201) {
            setSended(true)
            setJavb(reponce)
        }

        
        
        
    }

  return (
    <div>
        <input type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} />
        <button onClick={postHandler} >create post</button>
        {sended && 
        <>
            <h2> post sendend sucsefuly</h2>
            post title {javab.data.title} ba id  {javab.data.id} ersal shod
        </>}
    </div>
  )
}

export default Post