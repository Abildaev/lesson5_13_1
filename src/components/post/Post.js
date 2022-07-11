import React from 'react';
import {useSelector} from "react-redux";

function Post() {
    const post = useSelector(state => state.postReducer.post)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;