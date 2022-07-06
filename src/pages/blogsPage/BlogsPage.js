import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, Link} from "react-router-dom";
import Header from "../../components/header/Header";

function BlogsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <div className="container">
            <h1>Blogs page</h1>
            <div>
                {
                    posts.slice(0, 5).map(post => (
                        <div>
                            <h1>{post.title}</h1>
                            <Link to={`/blogs/${post.id}`}>show...</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BlogsPage;