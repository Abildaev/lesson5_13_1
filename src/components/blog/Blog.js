import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function Blog() {
    const [post, setPost] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.name}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Blog;