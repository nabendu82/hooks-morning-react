import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching1 = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    },[id])

    return (
        <>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </>
    );
};

export default DataFetching1;