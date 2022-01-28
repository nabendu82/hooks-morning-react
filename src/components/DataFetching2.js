import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching2 = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
        }
        getPosts()
    },[])

    return (
        <>
            <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </>
    );
};

export default DataFetching2;
