import React, { useState } from 'react';

const PostForm = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, title, body })
        }
        try {
            const res = await fetch(url, settings);
            const posts = await res.json();
            console.log(posts);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>React Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default PostForm;
