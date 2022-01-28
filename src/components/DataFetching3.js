import React, { useEffect, useState } from 'react';

const DataFetching3 = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await res.json();
                setPosts(posts);
            } catch (error) {
                console.log(error);
            }
        }
        getPosts()
    },[])

    return (
        <>
            <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </>
    );
};

export default DataFetching3;