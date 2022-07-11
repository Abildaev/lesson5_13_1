import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleWithParams} from "./store/titleSlice";
import MainPage from "./pages/mainPage/MainPage";
import PostPage from "./pages/postPage/PostPage";


function App() {
    const dispatch = useDispatch();
    const title = useSelector(state => state.titleReducer.title)

    const changeTitleFunc = () => {
        dispatch(changeTitle())
    }

    const changeNewTitle = () => {
        dispatch(changeTitleWithParams("Dastan"))
    }

    return (
        <div className="container pt-4 pb-4">
            <h1>{title}</h1>
            <button onClick={changeTitleFunc}>change title</button>
            <button onClick={changeNewTitle}>change title with params</button>
            <h1>---------------------------------------</h1>
            <div>
                {/*<MainPage/>*/}
                <PostPage/>
            </div>
        </div>
    );
}

export default App;
