import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getPost} from "../../store/postSlice";
import Post from "../../components/post/Post";

function PostPage() {
    const [id, setId] = useState(0);
    const dispatch = useDispatch();

    const changeInput = (e) => {
        setId(e.target.value)
    }

    const getPostFunc = () => {
        dispatch(getPost(id))
    }

    return (
        <div>
            <input type="number" placeholder="id" onChange={changeInput}/>
            <button onClick={getPostFunc}>get one post</button>
            <Post/>
            <h1>Dastan</h1>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
        </div>
    );
}

export default PostPage;